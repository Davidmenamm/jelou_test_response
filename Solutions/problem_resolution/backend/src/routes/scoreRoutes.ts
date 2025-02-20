/**
 * scoreRoutes.ts
 * This sets up the score calculation route.
 */
import { calculateScore } from '../utils/scoreCalculator';
import logger from '../utils/logger';
import { Router, Request, Response, NextFunction } from 'express';
import { validateScoreRequest } from '../middleware/validators';

const router = Router();

// Middleware to log request contents
router.use((req: Request, res: Response, next: NextFunction) => {
  logger.info('Incoming request', {
    method: req.method,
    path: req.path,
    body: req.body, // Log full body
  });
  next();
});

// POST /api/calculate-scores
router.post(
  '/calculate-scores',
  validateScoreRequest,
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { scores } = req.body as { scores: number[] };

      logger.info('Parsed scores', { scores }); // Log what we got

      if (!scores || !Array.isArray(scores)) {
        logger.warn('Validation failed', { body: req.body, scores }); // Log why it failed
        res.status(400).json({ error: 'Scores must be an array of numbers' });
        return;
      }

      // Calculate the score using calculateScore
      const score = calculateScore(scores);

      // Return only the score in the response
      res.status(200).json({ score });
    } catch (error) {
      next(error); // Pass errors to error-handling middleware
    }
  }
);

export default router;
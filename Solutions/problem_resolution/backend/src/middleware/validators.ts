/**
 * validators.ts
 * This checks score request data.
 */

import { Request, Response, NextFunction } from 'express';

export function validateScoreRequest(req: Request, res: Response, next: NextFunction) {
  const { scores } = req.body;

  if (!scores) {
    res.status(400).json({ error: 'Missing scores in request body' });
    return;
  }

  if (!Array.isArray(scores) || !scores.every((score) => typeof score === 'number')) {
    res.status(400).json({ error: 'Scores must be an array of numbers' });
    return;
  }

  next(); // Proceed to the next middleware/handler
}
/**
 * requestId.ts
 * This adds an ID to each request.
 */

import { v4 as uuidv4 } from 'uuid';
import { Request, Response, NextFunction } from 'express';

const addRequestId = (req: Request, res: Response, next: NextFunction) => {
  (req as any).id = uuidv4();
  next();
};

export default addRequestId;
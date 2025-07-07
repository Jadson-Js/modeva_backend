import { Request, Response, NextFunction } from 'express';

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;

export function asyncHandler(fn: AsyncHandler) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch(next); // Se der erro, passa pro middleware de erro
  };
}

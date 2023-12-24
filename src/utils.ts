import { Request, Response } from "express";

export const handler = (fn: (req: Request, res: Response) => unknown) => {
  return async (req: Request, res: Response) => {
    try {
      return await fn(req, res);
    } catch (error) {
      console.error("error", error);

      res.status(500).json({
        message: "Internal server error.",
      });
    }
  };
};

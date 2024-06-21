import httpStatus from "http-status";
import APIError from "../libs/error-api";
import { Response, Request, NextFunction } from "express";

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export const handler = (err:any, req:Request, res:Response, next?:NextFunction) => {
  const response = {
    code: err.status,
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  };

  if (process.env.NODE_ENV !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};

export const notFound = (req:Request, res:Response, next:NextFunction) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
  })
  return handler(err, req, res);
};
import httpStatus from "http-status";
import APIError, { IApiError } from "../libs/error-api";
import { Response, Request } from "express";

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export const handler = (err:IApiError, req:Request, res:Response) => {
  const response = {
    code: err?.status,
    message: err?.message,
    errors: err?.errors,
    stack: err.stack,
  } as IApiError;

  if (process.env.NODE_ENV !== 'development') {
    delete response.stack;
  }

  res.status(err.status as number);
  res.json(response);
};

export const notFound = (req:Request, res:Response) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
  })
  return handler(err, req, res);
};
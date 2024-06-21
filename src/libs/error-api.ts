import httpStatus from "http-status"
import ExtendableError from "./error"

type IApiError = {
  message:string
  errors?:any
  stack?:any
  status?:number
  isPublic?:boolean
}
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   */
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }:IApiError) {
    super({
      message, errors, status, isPublic, stack,
    });
  }
}

export default APIError;
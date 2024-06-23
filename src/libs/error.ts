/**
 * @extends Error
 */
export type CError = {
  message:string
  errors:unknown
  status:number
  stack?:string
  isPublic:boolean
}


class ExtendableError extends Error {
  errors: any
  status: number
  constructor({
    message,
    errors,
    status,
    stack,
  }:CError) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.stack = stack;
    // Error.captureStackTrace(this, this.constructor.name);
  }
}

export default ExtendableError;
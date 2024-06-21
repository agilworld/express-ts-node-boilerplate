/**
 * @extends Error
 */
type CError = {
  message:string
  errors:string | any
  status:number
  stack:string
  isPublic:boolean
}


class ExtendableError extends Error {
  errors: any
  status: number
  constructor({
    message,
    errors,
    status,
    isPublic,
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
class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    (this.message = message),
      (this.success = false),
      (this.errors = this.errors);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTtrace(this, this.constructor);
    }
  }
}

export { ApiError };

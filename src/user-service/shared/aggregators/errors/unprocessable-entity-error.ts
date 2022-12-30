import { BaseError } from './base-error';

export class UnprocessableEntityError extends BaseError {
  constructor(description?: string, details?: any) {
    super({
      message: 'Unprocessable',
      name: 'UnprocessableEntityError',
      description,
      details,
    });
  }
}

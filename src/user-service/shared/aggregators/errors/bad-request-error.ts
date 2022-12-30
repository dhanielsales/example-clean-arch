import { BaseError } from './base-error';

export class BadRequestError extends BaseError {
  constructor(description?: string, details?: any) {
    super({ message: 'Bad request', name: 'BadRequestError', description, details });
  }
}

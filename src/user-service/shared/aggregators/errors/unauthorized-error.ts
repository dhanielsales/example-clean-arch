import { BaseError } from './base-error';

export class UnauthorizedError extends BaseError {
  constructor(description?: string, details?: any) {
    super({ message: 'Unauthorized', name: 'UnauthorizedError', description, details });
  }
}

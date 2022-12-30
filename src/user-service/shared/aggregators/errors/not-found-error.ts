import { BaseError } from './base-error';

export class NotFoundError extends BaseError {
  constructor(description?: string, details?: any) {
    super({ message: 'Not found', name: 'NotFoundError', description, details });
  }
}

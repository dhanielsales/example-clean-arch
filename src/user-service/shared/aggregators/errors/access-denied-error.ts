import { BaseError } from './base-error';

export class AccessDeniedError extends BaseError {
  constructor(description?: string, details?: any) {
    super({ message: 'Access denied', name: 'AccessDeniedError', description, details });
  }
}

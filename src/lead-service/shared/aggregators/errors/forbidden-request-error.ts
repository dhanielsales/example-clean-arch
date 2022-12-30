import { BaseError } from './base-error';

export class ForbiddenRequestError extends BaseError {
  constructor(description?: string, details?: any) {
    super({ message: 'Forbidden Request', name: 'ForbiddenRequestError', description, details });
  }
}

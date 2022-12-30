import { BaseError } from './base-error';

export class ServerError extends BaseError {
  constructor(description?: string, details?: any) {
    super({ message: 'Internal server error', name: 'ServerError', description, details });
  }
}

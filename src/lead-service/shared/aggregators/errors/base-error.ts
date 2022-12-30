import { ErrorName } from './error-names';

interface Payload extends Error {
  name: ErrorName;
  description?: string;
  details?: any;
}

export class BaseError extends Error {
  override name: ErrorName;
  readonly description?: string;
  readonly details?: any;

  constructor(payload: Payload) {
    super(payload.message);

    this.name = payload.name;
    this.description = payload.description ?? payload.message;
    this.details = payload.details;
  }
}

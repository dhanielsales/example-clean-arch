export type ErrorName =
  | 'AccessDeniedError'
  | 'ServerError'
  | 'UnauthorizedError'
  | 'NotFoundError'
  | 'BadRequestError'
  | 'UnprocessableEntityError'
  | 'ForbiddenRequestError';

export const StatusCode: { [Key in ErrorName]: number } = {
  AccessDeniedError: 403,
  UnauthorizedError: 401,
  NotFoundError: 404,
  ServerError: 500,
  BadRequestError: 400,
  UnprocessableEntityError: 422,
  ForbiddenRequestError: 403,
};

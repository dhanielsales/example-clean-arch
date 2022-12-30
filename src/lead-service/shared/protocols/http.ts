export interface Middleware {
  handle(request: HttpRequest, error?: Error): Promise<HttpResponse>;
}

export interface HttpController {
  handle(request: HttpRequest): Promise<HttpResponse>;
}

export interface HttpRequest<Body = any, Query = any, Params = any> {
  header(name: string): string | string[] | undefined;
  url: string;
  cookies?: any;
  body?: Body;
  query?: Query;
  params?: Params;
}

export interface HttpResponse {
  status: number;
  payload?: any;
  headers?: { [key: string]: string | string[] };
}

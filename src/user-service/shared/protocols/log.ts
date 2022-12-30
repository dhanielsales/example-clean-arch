export interface Logger {
  error: (params: Logger.Params) => void;
  warning: (params: Logger.Params) => void;
  info: (params: Logger.Params) => void;
}

export namespace Logger {
  export interface Params {
    message: string;
    stack?: string | Error;
  }
}

import { Logger } from '@lead-service/shared/protocols/log';
import { format } from 'date-fns';

const colors = {
  red_foreground: '\x1b[31m',
  yellow_foreground: '\x1b[33m',
  blue_foreground: '\x1b[34m',
  bright: '\x1b[1m',
  reset: '\x1b[0m',
};

enum FormatTypes {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

const colorsPerType: { [key in FormatTypes]: ColorOptions } = {
  [FormatTypes.INFO]: 'blue_foreground',
  [FormatTypes.WARNING]: 'yellow_foreground',
  [FormatTypes.ERROR]: 'red_foreground',
};

type ColorOptions = keyof typeof colors;

export class LogFormatter implements Logger {
  public info(params: Logger.Params): void {
    this.format(FormatTypes.INFO, params.message, params.stack);
  }

  public warning(params: Logger.Params): void {
    this.format(FormatTypes.WARNING, params.message, params.stack);
  }

  public error(params: Logger.Params): void {
    this.format(FormatTypes.ERROR, params.message, params.stack);
  }

  private format(type: FormatTypes, message: string, stack?: string | Error): void {
    const formatedType = this.colorizeText(type, colorsPerType[type]);
    const formatedDate = format(new Date(), 'dd-MM-yyyy HH:mm:ss');

    let finalMessage: string = `[${formatedType}] ${this.colorizeText(
      formatedDate,
      'bright',
    )} - ${message}`;

    if (stack) {
      finalMessage += ` - ${this.formatStack(stack)}`;
    }

    console.log(finalMessage);
  }

  private formatStack(stack: string | Error): string {
    let formatedStack: string;

    if (typeof stack === 'string') {
      formatedStack = stack;
    } else if (stack instanceof Error) {
      formatedStack = `${stack.name} (${stack.message})`;
    } else {
      formatedStack = JSON.stringify(stack);
    }

    return formatedStack;
  }

  private colorizeText(text: string, color: ColorOptions): string {
    return `${colors[color]}${text}${colors.reset}`;
  }
}

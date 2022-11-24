import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.getArgByIndex(0);
    const dateIn = new Date();
    Logger.log('' + `URL: ${request.url}, Method: ${request.method}, ` + `from: ${request.ip}.`, 'Incoming Request');
    return next.handle().pipe(
      tap(() => {
        const dateOut = new Date();
        Logger.log(`Request fulfilled after ${dateOut.getTime() - dateIn.getTime()}ms.`, this.constructor.name);
      }),
    );
  }
}

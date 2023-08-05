import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': environment.RAPID_API_HOST,
        'x-rapidapi-key': environment.RAPID_API_KEY,
      },
      setParams: {
        key: environment.API_KEY,
      },
    });

    return next.handle(req);
  }
}

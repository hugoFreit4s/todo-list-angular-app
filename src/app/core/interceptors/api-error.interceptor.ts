import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let message = 'Erro desconhecido';

        if (err.error?.message) {
          message = err.error.message;
        } else if (err.status === 0) {
          message = 'Servidor indisponível';
        } else if (err.status === 401 || err.status === 403) {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          message = 'Acesso negado';
        } else if (err.status >= 500) {
          message = 'Ocorreu um erro, mas não é culpa sua! Tente novamente mais tarde';
        }

        console.log(message);

        return throwError(() => err);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorAuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('$isExonerate')) {
            const url = req.url.replace('$isExonerate', '');
            const requestClone = req.clone({ url: url });
            return next.handle(requestClone);
        }

        const user = JSON.parse(localStorage.getItem('user')!)
        if (!user) {
            return next.handle(req);
        }

        const requesClone = req.clone({
            setHeaders: {
                'x-auth-token': `${user.token}`
            }
        });

        return next.handle(requesClone);
    }
}
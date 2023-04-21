import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../shared/spinner/spinner.service';
import { catchError } from 'rxjs';


@Injectable()

export class ErrorApiInterceptor implements HttpInterceptor {
    constructor(private readonly spinnerService: SpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable < HttpEvent < any >> {

        this.spinnerService.show();

        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide()),
            catchError((error) => {
                this._evaluarError(error);
                return throwError(() => error)
            })
        );
    }

    private _evaluarError(error: HttpErrorResponse) {
        if (error.status === 401) {
            Swal.fire({
                title: "Error no tiene privilegios para realizar esta opcion",
                text: error.error.message,
                icon: "warning",
            })
        } else {
            if (error.status === 403) {
                Swal.fire({
                    title: "Error no tiene privilegios para realizar esta opcion",
                    text: error.error.message,
                    icon: "warning",
                })
            }
        }
    }
}
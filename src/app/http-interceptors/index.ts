import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./httpinterceptors";

//here we are sending our service http interceptors

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

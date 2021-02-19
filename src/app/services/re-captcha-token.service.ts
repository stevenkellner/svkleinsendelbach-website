import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReCaptchaTokenService {

    constructor(private httpClient: HttpClient) {}

    sendToken(token: string): Observable<any> {
        return this.httpClient.post<any>("/backend/token_validate", {recaptcha: token});
    }
}

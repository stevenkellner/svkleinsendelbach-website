import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReCaptchaTokenService {

    constructor(private httpClient: HttpClient) {}

    sendToken(token: string, handler: (valid: boolean) => void) {
        this.httpClient.post('https://svkleinsendelbach.de/backend/tokenValidation.php', {recaptcha: token}).subscribe((data: any) => {
            handler(data.success);
        }, _error => {
            handler(false);
        });
    }
}
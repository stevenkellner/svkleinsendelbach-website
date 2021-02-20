import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SendContactMailService {

    constructor(private httpClient: HttpClient) {}

    sendMail(request: MailRequest, handler: (failed: boolean) => void) {
        const url = "https://europe-west1-svk-website-1577806766523.cloudfunctions.net/backend/sendContactMail";
        this.httpClient.post(url, request).subscribe((data: any) => {
            console.log(data);
        }, _error => {
            handler(true);
        });
    }
}

export interface MailRequest {
    sender: {
        name: string,
        address: string
    },
    receiver: {
        name: string,
        address: string
    },
    message: string
}
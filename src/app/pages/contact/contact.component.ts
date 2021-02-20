import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ReCaptchaTokenService } from 'src/app/services/re-captcha-token.service';
import { SendContactMailService } from 'src/app/services/send-contact-mail.service';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

    formEvaluated: boolean = false;

    status: Status = Status.input;

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId: string = "contact";

    private currentStatusTimeout: number | null = null;

    receivers: Receiver[] = [
        {name: "Vorstandschaft", address: "TODO"},
        {name: "Herrenfußball", address: "TODO"},
        {name: "Jugendfußball", address: "TODO"},
        {name: "Gymnastik", address: "TODO"},
        {name: "Tanzen", address: "TODO"}
    ]

    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        receiver: [this.receivers[0].name, Validators.required],
        message: ['', Validators.required]
    });

    recaptchaValid: boolean = false;

    isDarkMode: boolean;

    constructor(private titleService: Title,
        private fb: FormBuilder,
        private recaptchaTokenService: ReCaptchaTokenService,
        private sendContactMailService: SendContactMailService) {
        this.titleService.setTitle("Kontakt")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
        this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            this.isDarkMode = event.matches;
        });
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }

    onSubmit() {
        if (this.contactForm.invalid || !this.recaptchaValid) {
            this.formEvaluated = true;
            this.setStatus(Status.inputError);
            return;
        }
        const address = this.receivers.find(receiver => {
            return receiver.name == this.contactForm.value.receiver;
        })!.address;
        this.sendContactMailService.sendMail({
            sender: {
                name: this.contactForm.value.name,
                address: this.contactForm.value.email
            },
            receiver: {
                name: this.contactForm.value.receiver,
                address: address
            },
            message: this.contactForm.value.message
        }, failed => {
            const status = failed ? Status.failure : Status.success;
            this.setStatus(status);
            if (!failed) {
                this.resetForm();
            }
        })
    }

    resetForm() {
        this.contactForm.reset();
        this.contactForm.controls.receiver.setValue(this.receivers[0].name)
        this.formEvaluated = false;
    }

    setStatus(status: Status) {
        this.status = status;
        if (this.currentStatusTimeout) clearTimeout(this.currentStatusTimeout);
        this.currentStatusTimeout = window.setTimeout(() => {
            this.status = Status.input;
        }, 5000);
    }

    resolved(captchaResponse: string) {
        this.recaptchaTokenService.sendToken(captchaResponse, valid => {
            this.recaptchaValid = valid;
        });
    }
}

interface Receiver {
    name: string
    address: string
}

enum Status {
    input = "",
    success = "success",
    inputError = "inputError",
    failure = "failure"
}
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ReCaptchaTokenService } from 'src/app/services/re-captcha-token.service';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

    @ViewChild('form') form: ElementRef | undefined;

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

    constructor(private titleService: Title,
        private fb: FormBuilder,
        private recaptchaTokenService: ReCaptchaTokenService) {
        this.titleService.setTitle("Kontakt")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }

    onSubmit() {
        if (this.contactForm.invalid) {
            this.form?.nativeElement.classList.add("evaluated");
            this.formEvaluated = true;
            this.setStatus(Status.inputError);
            return;
        }
        const address = this.receivers.find(receiver => {
            return receiver.name == this.contactForm.value.receiver;
        })!.address;
        console.log(`Email von ${this.contactForm.value.name}, ${address} an ${this.contactForm.value.receiver} mit ${this.contactForm.value.message}`)
        this.resetForm();
    }

    resetForm() {
        this.contactForm.reset();
        this.contactForm.controls.receiver.setValue(this.receivers[0].name)
        this.form?.nativeElement.classList.remove("evaluated");
        this.formEvaluated = false;
        this.setStatus(Status.input);
    }

    setStatus(status: Status) {
        this.status = status;
        if (this.currentStatusTimeout) clearTimeout(this.currentStatusTimeout);
        this.currentStatusTimeout = window.setTimeout(() => {
            this.status = Status.input;
        }, 5000);
    }

    resolved(captchaResponse: string) {
        this.recaptchaTokenService.sendToken(captchaResponse).subscribe(data => {
            console.log(data);
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
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DeviceTypeListener } from '../header/header.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

    deviceTypeListener: DeviceTypeListener;

    constructor(private renderer: Renderer2) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }
    ngOnInit(): void {}

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

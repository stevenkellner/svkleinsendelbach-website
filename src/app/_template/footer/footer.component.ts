import { Component, HostListener } from '@angular/core';
import { DeviceTypeListener } from '../header/header.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

    deviceTypeListener: DeviceTypeListener;

    constructor() {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

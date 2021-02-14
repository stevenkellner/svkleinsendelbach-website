import { Component, HostListener } from '@angular/core';
import { DeviceType, DeviceTypeListener } from '../header/header.component';

@Component({
    selector: 'app-left-row',
    templateUrl: './left-row.component.html',
    styleUrls: ['./left-row.component.sass']
})
export class LeftRowComponent {

    offscreen = false;

    isMoving = false;

    private currentMovingTimeout: number | null = null;

    deviceTypeListener: DeviceTypeListener;

    constructor() {
        this.deviceTypeListener = new DeviceTypeListener(window, deviceType => {
            if (deviceType == DeviceType.mobile) {
                this.offscreen = true;
            }
        });
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }

    toggleOffscreen() {
        this.offscreen = this.offscreen ? false : true;
        this.isMoving = true;
        if (this.currentMovingTimeout) clearTimeout(this.currentMovingTimeout);
        this.currentMovingTimeout = window.setTimeout(() => {
            this.isMoving = false;
        }, 500);
    }
}
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { DeviceType, DeviceTypeListener } from '../header/header.component';

@Component({
    selector: 'app-left-row',
    templateUrl: './left-row.component.html',
    styleUrls: ['./left-row.component.sass']
})
export class LeftRowComponent implements AfterViewInit {

    offscreen = false;

    isMoving = false;

    private currentMovingTimeout: number | null = null;

    deviceTypeListener: DeviceTypeListener;

    constructor() {
        this.deviceTypeListener = new DeviceTypeListener(window, deviceType => {
            if (deviceType === DeviceType.mobile) {
                this.offscreen = true;
            }
            const appLeftRow = document.getElementById('left-row')?.parentElement;
            appLeftRow?.classList.remove('desktop');
            appLeftRow?.classList.remove('tablet');
            appLeftRow?.classList.remove('mobile');
            appLeftRow?.classList.add(deviceType);
        });
    }

    ngAfterViewInit(): void {
        const appLeftRow = document.getElementById('left-row')?.parentElement;
        appLeftRow?.classList.remove('desktop');
        appLeftRow?.classList.remove('tablet');
        appLeftRow?.classList.remove('mobile');
        appLeftRow?.classList.add(this.deviceTypeListener.deviceType);
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }

    toggleOffscreen(): void {
        this.offscreen = this.offscreen ? false : true;
        if (this.deviceTypeListener.isMobile()) {
            const appLeftRow = document.getElementById('left-row')?.parentElement;
            if (this.offscreen) {
                appLeftRow?.classList.remove('onscreen');
            } else {
                appLeftRow?.classList.add('onscreen');
            }
        }
        this.isMoving = true;
        if (this.currentMovingTimeout) { clearTimeout(this.currentMovingTimeout); }
        this.currentMovingTimeout = window.setTimeout(() => {
            this.isMoving = false;
        }, 500);
    }
}

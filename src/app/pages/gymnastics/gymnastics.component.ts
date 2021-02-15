import { Component, HostListener } from '@angular/core';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-gymnastics',
    templateUrl: './gymnastics.component.html',
    styleUrls: ['./gymnastics.component.sass']
})
export class GymnasticsComponent {

    deviceTypeListener: DeviceTypeListener;

    constructor() { 
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }
    
    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }
}

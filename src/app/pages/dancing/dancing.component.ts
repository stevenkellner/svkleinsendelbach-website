import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-dancing',
    templateUrl: './dancing.component.html',
    styleUrls: ['./dancing.component.sass']
})
export class DancingComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId: string = "dancing";

    constructor(private titleService: Title) {
        this.titleService.setTitle("Tanzen")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }
    
    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }
}

import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-gymnastics',
    templateUrl: './gymnastics.component.html',
    styleUrls: ['./gymnastics.component.sass']
})
export class GymnasticsComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'gymnastics';

    constructor(private titleService: Title) {
        this.titleService.setTitle('Gymnastik');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

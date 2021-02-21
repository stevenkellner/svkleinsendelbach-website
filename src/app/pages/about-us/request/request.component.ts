import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.sass']
})
export class RequestComponent {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'about-us';

    constructor(private titleService: Title) {
        this.titleService.setTitle('Mitgliedsantrag');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

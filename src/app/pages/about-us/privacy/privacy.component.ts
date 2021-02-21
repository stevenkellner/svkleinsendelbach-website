import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.sass']
})
export class PrivacyComponent {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'about-us';

    constructor(private titleService: Title) {
        this.titleService.setTitle('Datenschutzerklärung');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

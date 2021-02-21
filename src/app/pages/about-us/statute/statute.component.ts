import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-statute',
    templateUrl: './statute.component.html',
    styleUrls: ['./statute.component.sass']
})
export class StatuteComponent {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'about-us';

    constructor(private titleService: Title) {
        this.titleService.setTitle('Satzung');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-football-youth-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.sass']
})
export class FootballYouthGeneralComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-youth';

    constructor(private titleService: Title) {
        this.titleService.setTitle('Jugendfußball');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

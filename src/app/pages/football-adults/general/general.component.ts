import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-football-adults-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.sass']
})
export class FootballAdultsGeneralComponent {

    deviceTypeListener: DeviceTypeListener;
    
    activeNavBarId: string = "football-adult";

    constructor(private titleService: Title) {
        this.titleService.setTitle("Herrenfussball")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }
}

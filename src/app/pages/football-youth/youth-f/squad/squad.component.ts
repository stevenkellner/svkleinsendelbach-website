import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-youth-f-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.sass']
})
export class FootballYouthFSquadComponent {

    deviceTypeListener: DeviceTypeListener;
    
    activeNavBarId: string = "football-youth";

    constructor(private titleService: Title) {
        this.titleService.setTitle("F-Jugend")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }
}

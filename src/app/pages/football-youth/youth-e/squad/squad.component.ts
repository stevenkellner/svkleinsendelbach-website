import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-youth-e-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.sass']
})
export class FootballYouthESquadComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-youth';

    constructor(private titleService: Title) {
        this.titleService.setTitle('E-Jugend');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

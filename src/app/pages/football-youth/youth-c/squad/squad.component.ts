import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-youth-c-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.sass']
})
export class FootballYouthCSquadComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-youth';

    constructor(private titleService: Title) {
        this.titleService.setTitle('C-Jugend');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

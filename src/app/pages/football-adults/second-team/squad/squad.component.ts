import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-adults-second-team-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.sass']
})
export class FootballAdultsSecondTeamSquadComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-adult';

    constructor(private titleService: Title) {
        this.titleService.setTitle('Zweite Mannschaft');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

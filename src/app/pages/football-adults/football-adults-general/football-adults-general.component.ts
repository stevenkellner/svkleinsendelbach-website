import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-football-adults-general',
    templateUrl: './football-adults-general.component.html',
    styleUrls: ['./football-adults-general.component.sass']
})
export class FootballAdultsGeneralComponent implements OnInit {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;
    
    activeNavBarId: string = "football-adult";

    constructor(private titleService: Title) {
        this.titleService.setTitle("Vorstandschaft")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngOnInit(): void {}

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    handleLeftRowWidthChange(width: number) {
        this.leftRowWidth = width;
    }
}

import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-chronicle',
    templateUrl: './chronicle.component.html',
    styleUrls: ['./chronicle.component.sass']
})
export class ChronicleComponent {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;
    
    activeNavBarId: string = "about-us";

    constructor(private titleService: Title) {
        this.titleService.setTitle("Chronik")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

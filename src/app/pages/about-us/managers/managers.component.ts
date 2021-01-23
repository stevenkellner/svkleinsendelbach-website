import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.sass']
})
export class ManagersComponent implements OnInit {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;
    
    constructor() {
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
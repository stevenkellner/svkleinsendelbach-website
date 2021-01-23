import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-chronicle',
  templateUrl: './chronicle.component.html',
  styleUrls: ['./chronicle.component.sass']
})
export class ChronicleComponent implements OnInit {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;
    
    constructor(private titleService: Title) {
        this.titleService.setTitle("Chronik")
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

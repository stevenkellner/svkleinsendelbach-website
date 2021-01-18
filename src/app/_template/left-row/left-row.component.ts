import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DeviceType, DeviceTypeListener } from '../header/header.component';

@Component({
  selector: 'app-left-row',
  templateUrl: './left-row.component.html',
  styleUrls: ['./left-row.component.sass']
})
export class LeftRowComponent implements OnInit {

    offscreen = false;

    deviceTypeListener: DeviceTypeListener;

    @Output() widthEmitter: EventEmitter<number> = new EventEmitter<number>()

    constructor(private renderer: Renderer2) {
        this.deviceTypeListener = new DeviceTypeListener(window, deviceType => {
            if (deviceType == DeviceType.mobile) {
                this.offscreen = true;
            }
            this.widthEmitter.emit(this.offscreen ? 0 : 12.5);
        });
    }
    ngOnInit(): void {}

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    toggleOffscreen(): void {
        this.offscreen = this.offscreen ? false : true;
        this.widthEmitter.emit(this.offscreen ? 0 : 12.5);
    }
}
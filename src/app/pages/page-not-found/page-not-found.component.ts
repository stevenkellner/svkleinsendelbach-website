import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent {

    deviceTypeListener: DeviceTypeListener;

    constructor(private titleService: Title) {
        this.titleService.setTitle("Seite nicht gefunden")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }
    
    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }
}

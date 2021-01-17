import { Component, HostListener } from '@angular/core';
import { DeviceTypeListener } from './_template/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'svkleinsendelbach-website';

    navBarSticky: boolean = false;

    deviceTypeListener: DeviceTypeListener;

    constructor() {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    handleNavBarSticky(navBarSticky: boolean): void {
      this.navBarSticky = navBarSticky;
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

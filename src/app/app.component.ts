import { Component, HostListener } from '@angular/core';
import { DeviceTypeListener } from './_template/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    title = 'svkleinsendelbach-website';

    navBarSticky = false;

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'home';

    constructor() {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    handleNavBarSticky(navBarSticky: boolean): void {
      this.navBarSticky = navBarSticky;
    }

    setActiveNavBarId(event: any): void {
        this.activeNavBarId = event.activeNavBarId;
    }
}

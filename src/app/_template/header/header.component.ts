import { HttpClient } from '@angular/common/http';
import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { NavBarDecoderService, NavigationBarItem } from 'src/app/services/nav-bar-decoder.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

    /** Id of active nav bar item */
    @Input() activePageId: string | undefined;

    /** Title of current navigation page (e.g. 'Über uns' for all about-us tabs) */
    @Input() title: string | undefined;

    /** Current nav bar item that is hovered over (e.g. 'Gynmastik' if hover over 'Gymnastik' nav bar item) */
    expandedNavBarItem: NavigationBarItem | null = null;

    /** Device type listener */
    deviceTypeListener: DeviceTypeListener;

    /** All nav bar items */
    navBarItems: NavigationBarItem[] | null = null;

    /** Emits sticky nav bar */
    @Output() navBarStickyEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(httpClient: HttpClient) {
        this.deviceTypeListener = new DeviceTypeListener(window, deviceType => {
            new NavBarDecoderService(httpClient).decode(deviceType, (navBarItems, error) => {
                if (error != null) {
                    throw error;
                } else if (navBarItems == null) {
                    throw new Error('Couln\'t decode nav bar.');
                }
                this.navBarItems = navBarItems;
                for (const navBarItem of navBarItems) {
                    if (navBarItem.id === this.activePageId) {
                        this.title = navBarItem.name;
                        break;
                    }
                }
            });
        });
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    /**
     * Sets hovered nav bar item
     * @param expandedNavBarItem hovered nav bar item
     */
    setExpandedNavBar(item: NavigationBarItem | null): void {
        this.expandedNavBarItem = item;
    }

    /**
     * Handles sticky nav bar change
     * @param navBarSticky is nav bar sticky
     */
    handleNavBarStickyEmitter(navBarSticky: boolean): void {
        this.navBarStickyEmitter.emit(navBarSticky);
      }
}

export enum DeviceType {
    desktop = 'desktop',
    tablet = 'tablet',
    mobile = 'mobile'
}

export class DeviceTypeListener {

    deviceType: DeviceType;

    constructor(window: Window,
                private onChange: (deviceType: DeviceType) => void) {
            this.deviceType = this.getDeviceType(window);
            this.onChange(this.deviceType);
        }

    windowChanged(window: Window): void {
        this.deviceType = this.getDeviceType(window);
        this.onChange(this.deviceType);
    }

    getDeviceType(window: Window): DeviceType {
        if (window.innerWidth >= 1113) {
            return DeviceType.desktop;
        } else if (window.innerWidth <= 767) {
            return DeviceType.mobile;
        }
        return DeviceType.tablet;
    }

    isMobile(): boolean {
        return this.deviceType === DeviceType.mobile;
    }

    isTablet(): boolean {
        return this.deviceType === DeviceType.tablet;
    }

    isDesktop(): boolean {
        return this.deviceType === DeviceType.desktop;
    }

    deviceTypeString(): string {
        return this.deviceType.valueOf();
    }

}

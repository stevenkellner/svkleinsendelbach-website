import { Component, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { HoverEmitter, NavigationBarItem } from './nav-bar/nav-bar.component'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit, OnInit {

    @Input() activeId: string | undefined;

    title: string | undefined;

    @Output() navBarStickyEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

    navBarHoverItem: NavigationBarItem | null = null;

    deviceTypeListener: DeviceTypeListener;

    @ViewChild('headerTitleContainer') titleContainer: ElementRef | undefined;

    constructor(private renderer: Renderer2) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngOnInit(): void {
        if (this.activeId == null) {
            throw new Error('No active Id given.');
        }
    }

    ngAfterViewInit(): void {
        this.setHeaderSheetTimeout();
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    handleHoverEmitter(hoverEmitter: HoverEmitter): void {
        if (hoverEmitter.start) {
            this.navBarHoverItem = hoverEmitter.item;
        } else if (this.navBarHoverItem?.id == hoverEmitter.item.id) {
            this.navBarHoverItem = null;
        }
    }

    handleNavBarSticky(navBarSticky: boolean): void {
        this.navBarStickyEmitter.emit(navBarSticky);
    }
    
    handleTitleEmitter(title: string): void {
        this.title = title;
    } 

    setHeaderSheetTimeout(): void {
        this.renderer.addClass(this.titleContainer?.nativeElement, "after-load");
        setTimeout(() => {
            this.renderer.removeClass(this.titleContainer?.nativeElement, "after-load");
        }, 10000);
    }
}

export enum DeviceType {
    desktop = "desktop",
    tablet = "tablet",
    mobile = "mobile"
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
        return this.deviceType == DeviceType.mobile;
    }
    
    isTablet(): boolean {
        return this.deviceType == DeviceType.tablet;
    }

    isDesktop(): boolean {
        return this.deviceType == DeviceType.desktop;
    }

    deviceTypeString(): string {
        return this.deviceType.valueOf();
    }

}

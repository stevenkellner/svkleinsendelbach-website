import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { NavigationBarItem } from 'src/app/services/nav-bar-decoder.service';
import { DeviceTypeListener } from '../../header.component';

@Component({
    selector: 'app-nav-bar-item',
    templateUrl: './nav-bar-item.component.html',
    styleUrls: ['./nav-bar-item.component.sass']
})
export class NavBarItemComponent {

    @Input() navBarItem: NavigationBarItem | null = null;

    @Input() expandedNavBarItem: NavigationBarItem | null = null;

    @Input() activePageId: string | undefined;

    @Input() lastNavBarItemId: string | null = null;

    @Input() afterExpandedNavBarItemId: string | null = null;

    @Input() isMobileNavBarExtended = false;

    @Output() expandedNavBarItemEmitter: EventEmitter<NavigationBarItem | null> = new EventEmitter<NavigationBarItem | null>();

    @ViewChild('navBarItemTitle') navBarItemTitleElement: ElementRef | undefined;

    @ViewChild('subItems') subItemsElement: ElementRef | undefined;

    @ViewChildren('subItem') subItemElements: ElementRef[] | undefined;

    deviceTypeListener: DeviceTypeListener;

    constructor() {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    numberSubItemsStyle(): string {
        if (!this.navBarItem?.subItems) { return ''; }
        if (this.navBarItem !== this.expandedNavBarItem) { return ''; }
        return 'number' + this.navBarItem.subItems.length.toString();
    }

    widthOfSubItems(): number {
        if (!this.navBarItem?.subItems) { return 0; }
        const maxLetterCount = this.navBarItem.subItems.map((subItem) => {
            return Math.max(subItem.name.length, 12);
        }).reduce((result: number, letterCount) => {
            return Math.max(result, letterCount);
        });
        return (maxLetterCount + 4) * 10;
    }

    widthStyle(): object | null {
        if (this.deviceTypeListener.isMobile()) { return null; }
        return {
            width: this.widthOfSubItems() + 'px'
        };
    }

    setExpandedNavBarItemOnClick(): void {
        this.expandedNavBarItemEmitter.emit(this.navBarItem);
    }

    hoverStarted(): void {
        if (!this.deviceTypeListener.isDesktop()) { return; }
        this.expandedNavBarItemEmitter.emit(this.navBarItem);
    }

    hoverEnded(): void {
        if (!this.deviceTypeListener.isDesktop()) { return; }
        this.expandedNavBarItemEmitter.emit(null);
    }
}

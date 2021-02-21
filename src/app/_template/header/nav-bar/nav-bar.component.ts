import { Input, Component, Output, EventEmitter, HostListener, AfterViewInit, ViewChild, ElementRef, Renderer2,
    ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationBarItem } from 'src/app/services/nav-bar-decoder.service';
import { DeviceTypeListener } from '../header.component';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements AfterViewInit, OnChanges {

    @Input() activePageId: string | undefined;

    @Input() navBarItems: NavigationBarItem[] | null = null;

    @Output() expandedNavBarItemEmitter: EventEmitter<NavigationBarItem | null> = new EventEmitter<NavigationBarItem | null>();

    @Output() navBarStickyEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChildren('navBarItem') navBarItemElements: ElementRef[] | undefined;

    @ViewChild('navBar') navBarElement: ElementRef | undefined;

    deviceTypeListener: DeviceTypeListener;

    stickyNavBarOffset: number | undefined;

    mobileHamburgerButtonActive = false;

    expandedNavBarItem: NavigationBarItem | null = null;

    lastNavBarItemId: string | null = null;

    afterExpandedNavBarItemId: string | null = null;

    constructor(private renderer: Renderer2) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngAfterViewInit(): void {
        this.getAfterExpandedNavBarItemId();
        this.getLastNavBarItemId();
        this.stickyNavBarOffset = this.navBarElement?.nativeElement.offsetTop;
        window.onscroll = () => {
            if (this.stickyNavBarOffset != null) {
                if (window.pageYOffset >= this.stickyNavBarOffset) {
                    this.renderer.addClass(this.navBarElement?.nativeElement, 'sticky');
                    this.navBarStickyEmitter.emit(true);
                } else {
                    this.renderer.removeClass(this.navBarElement?.nativeElement, 'sticky');
                    this.navBarStickyEmitter.emit(false);
                }
            }
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getAfterExpandedNavBarItemId();
        this.getLastNavBarItemId();
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    toggleMobileHamburgerButtonActive(): void {
        this.mobileHamburgerButtonActive = this.mobileHamburgerButtonActive ? false : true;
        if (this.mobileHamburgerButtonActive || !this.navBarItemElements) { return; }
        for (const navBarItemComponent of this.navBarItemElements) {
            this.afterExpandedNavBarItemId = null;
            this.expandedNavBarItem = null;
        }
    }

    widthOfNavBarItem(navBarItem: NavigationBarItem): number {
        if (!this.navBarItems) { return 0; }
        const getLetterCount = (item: NavigationBarItem) => {
            return Math.max(item.name.length, 8) + (item.subItems != null ? 2 : 0);
        };
        const totalLetterCount = this.navBarItems.reduce((result, item) => {
            return result + getLetterCount(item);
        }, 0);
        const letterCount = getLetterCount(navBarItem);
        return window.innerWidth * letterCount / totalLetterCount;
    }

    widthStyle(navBarItem: NavigationBarItem): object | null {
        if (this.deviceTypeListener.isMobile()) { return null; }
        return {
            width: this.widthOfNavBarItem(navBarItem) + 'px'
        };
    }

    setExpandedNavBarItem(item: NavigationBarItem | null): void {
        if (this.expandedNavBarItem === item) {
            this.expandedNavBarItem = null;
        } else {
            this.expandedNavBarItem = item;
        }
        this.expandedNavBarItemEmitter.emit(this.expandedNavBarItem);
        this.getAfterExpandedNavBarItemId();
        this.getLastNavBarItemId();
    }

    getLastNavBarItemId(): void {
        if (!this.navBarItems || this.navBarItems.length === 0) {
             this.lastNavBarItemId = null;
             return;
        }
        this.lastNavBarItemId = this.navBarItems[this.navBarItems.length - 1].id;
    }

    getAfterExpandedNavBarItemId(): void {
        if (!this.navBarItems || this.navBarItems.length === 0 || !this.expandedNavBarItem) {
            this.afterExpandedNavBarItemId = null;
            return;
        }
        const index = this.navBarItems.indexOf(this.expandedNavBarItem) + 1;
        if (index >= this.navBarItems.length) {
            this.afterExpandedNavBarItemId = null;
            return;
        }
        this.afterExpandedNavBarItemId = this.navBarItems[index].id;
    }
}

import { Component, OnInit, HostListener, Output, EventEmitter, ElementRef, ViewChildren, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceTypeListener, DeviceType } from '../header.component'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.sass']
})

export class NavBarComponent implements OnInit {

    navBarItems: NavigationBarItem[]

    deviceTypeListener: DeviceTypeListener;

    activeNavBarItemId: string | null = null;

    mobileHamburgerButtonActive: boolean = false;

    @Output() navBarItemHoverEmitter: EventEmitter<HoverEmitter> = new EventEmitter<HoverEmitter>()

    @ViewChildren('navBarItem') navBarItemElements: ElementRef[] | undefined;

    constructor(private httpClient: HttpClient,
        private renderer: Renderer2) {
        this.navBarItems = [];
        this.deviceTypeListener = new DeviceTypeListener(window, deviceType => {
            if (deviceType == DeviceType.desktop) {
                this.activeNavBarItemId = null
            }
            this.decodeNavItems();
        });
    }

    ngOnInit(): void {}

    decodeNavItems(): void {
        this.httpClient.get('../../../../assets/nav-bar-items.json').subscribe((data: any) => {
            const navItems = data[this.deviceTypeListener.deviceType];
            let navBarItems: NavigationBarItem[] = [];
            for (const navItem of navItems) {
                const returnTuple = this.getNavBarItem(data, navItem["id"]);
                const name = returnTuple![0]
                const linkUrl = returnTuple![1]
                const subItems = navItem["sub-items"];
                let navBarSubItems: NavigationBarSubItem[] | null = null;
                if (subItems != null) {
                    navBarSubItems = [];
                    for (const subItem of subItems) {
                        const returnTuple = this.getNavBarItem(data, subItem);
                        const name = returnTuple![0]
                        const linkUrl = returnTuple![1]
                        const navBarSubItem = new NavigationBarSubItem(subItem, name, linkUrl);
                        navBarSubItems.push(navBarSubItem);
                    }
                }
                const navBarItem = new NavigationBarItem(navItem["id"], name, linkUrl, navBarSubItems);
                navBarItems.push(navBarItem);
            }
            this.navBarItems = navBarItems;
        });
    }

    getNavBarItem(data: any, id: string): [string, string] | null {
        const allNavItems = data["all-nav-items"];
        for (const navItem of allNavItems) {
            if (navItem["id"] == id) {
                return [navItem["name"], navItem["linkUrl"]]
            }
        }
        return null;
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }
    
    setActiveNavBarItem(item: NavigationBarItem): void {
        this.activeNavBarItemId = this.activeNavBarItemId == item.id ? null : item.id;
    }

    toggleMobileHamburgerButtonActive(): void {
        this.mobileHamburgerButtonActive = this.mobileHamburgerButtonActive ? false : true
        if (!this.mobileHamburgerButtonActive && this.navBarItemElements != null) {
            for (const navBarItemElement of this.navBarItemElements) {
                this.renderer.removeClass(navBarItemElement.nativeElement, "expanded");
            }
        }
    }

    widthOfNavBarItem(navBarItem: NavigationBarItem): number {
        const getLetterCount = (navBarItem: NavigationBarItem) => {
            return Math.max(navBarItem.name.length, 8) + (navBarItem.subItems != null ? 2 : 0);
        };
        const totalLetterCount = this.navBarItems.reduce((result, navBarItem) => {
            return result + getLetterCount(navBarItem);
        }, 0);
        const letterCount = getLetterCount(navBarItem);
        return window.innerWidth * letterCount / totalLetterCount;
    }

    numberOfSubItems(navBarItems: NavigationBarItem): number | undefined {
        return navBarItems.subItems?.length;
    }

    numberOfSubItemInNavBarItem(subItem: NavigationBarSubItem, navBarItem: NavigationBarItem): number {
        let number = 0;
        for (const _subItem of navBarItem.subItems!) {
            if (subItem.id == _subItem.id) {
                break;
            }
            number++;
        }
        return number;
    }

    hoverStartItem(navBarItem: NavigationBarItem): void {
        this.navBarItemHoverEmitter.emit({
            start: true,
            item: navBarItem
        });
    }

    hoverEndItem(navBarItem: NavigationBarItem): void {
        this.navBarItemHoverEmitter.emit({
            start: false,
            item: navBarItem
        });
    }
}

export interface HoverEmitter {
    start: boolean;
    item: NavigationBarItem;
}

export class NavigationBarItem {

    id: string;

    name: string;

    linkUrl: string;

    subItems: NavigationBarSubItem[] | null;

    constructor(id: string, name: string, linkUrl: string, subItems: NavigationBarSubItem[] | null = null) {
        this.id = id;
        this.name = name
        this.linkUrl = linkUrl;
        this.subItems = subItems;
    }
}

class NavigationBarSubItem {

    id: string;

    name: string;

    linkUrl: string;

    constructor(id: string, name: string, linkUrl: string) {
        this.id = id;
        this.name = name;
        this.linkUrl = linkUrl;
    }
}
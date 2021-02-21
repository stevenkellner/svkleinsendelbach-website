import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceType } from '../_template/header/header.component';

@Injectable({
    providedIn: 'root'
})
export class NavBarDecoderService {

    constructor(private httpClient: HttpClient) {}

    decode(deviceType: DeviceType, completionHandler: (navBarItems: NavigationBarItem[] | null, error: Error | null) => void): void {
        const filePath = '../../assets/json-data/nav-bar-items.json';
        this.httpClient.get(filePath).subscribe((data: any) => {
            const navBarItems: NavigationBarItem[] = [];
            const navItems = data[deviceType];
            for (const navItem of navItems) {
                const decodedItem = this.decodeItem(data, navItem.id);
                if (decodedItem == null) {
                    return completionHandler(null, new Error(`nav-bar-items.json doesn't contain a nav bar item with ${navItem.id}`));
                }
                const subItems = navItem['sub-items'];
                let navBarSubItems: NavigationBarSubItem[] | null = null;
                if (subItems != null) {
                    navBarSubItems = [];
                    for (const subItem of subItems) {
                        const decodedSubItem = this.decodeItem(data, subItem);
                        if (decodedSubItem == null) {
                            return completionHandler(null, new Error(`nav-bar-items.json doesn\'t contain a sub item with ${subItem}`));
                        }
                        const navBarSubItem: NavigationBarSubItem = {
                            id: subItem,
                            name: decodedSubItem.name,
                            linkUrl: decodedSubItem.link
                        };
                        navBarSubItems.push(navBarSubItem);
                    }
                }
                const navBarItem: NavigationBarItem = {
                    id: navItem.id,
                    name: decodedItem.name,
                    linkUrl: decodedItem.link,
                    subItems: navBarSubItems
                };
                navBarItems.push(navBarItem);
            }
            completionHandler(navBarItems, null);
        });
    }

    private decodeItem(data: any, id: string): {name: string, link: string} | null {
        const allNavItems = data['all-nav-items'];
        for (const navItem of allNavItems) {
            if (navItem.id === id) {
                return {
                    name: navItem.name,
                    link: navItem.linkUrl
                };
            }
        }
        return null;
    }
}

/**
 * Contains properties of a nav bar item.
 */
export interface NavigationBarItem {

    id: string;

    name: string;

    linkUrl: string;

    subItems: NavigationBarSubItem[] | null;

}

/**
 * Contains properties of a nav bar sub item.
 */
interface NavigationBarSubItem {

    id: string;

    name: string;

    linkUrl: string;
}

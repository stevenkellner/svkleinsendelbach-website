import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceType } from '../_template/header/header.component';

/**
 * Used to decode nav bar items
 */
@Injectable({
    providedIn: 'root'
})
export class NavBarDecoderService {

    constructor(private httpClient: HttpClient) {}
  
    /**
     * Decodes nav bar items and sub items.
     * @param {DeviceType} deviceType type of the device
     * @param {Function} completionHandler handles nav bar items of error
     */
    decode(deviceType: DeviceType, completionHandler: (navBarItems: NavigationBarItem[] | null, error: Error | null) => void) {
        const filePath = '../../assets/json-data/nav-bar-items.json';
        this.httpClient.get(filePath).subscribe((data: any) => {
            let navBarItems: NavigationBarItem[] = [];
            const navItems = data[deviceType];
            for (const navItem of navItems) {
                const decodedItem = this.decodeItem(data, navItem["id"]);
                if (decodedItem == null) {
                    return completionHandler(null, new Error(`nav-bar-items.json doesn't contain a nav bar item with ${navItem["id"]}`));
                }
                const subItems = navItem["sub-items"];
                let navBarSubItems: NavigationBarSubItem[] | null = null;
                if (subItems != null) {
                    navBarSubItems = [];
                    for (const subItem of subItems) {
                        const decodedItem = this.decodeItem(data, subItem);
                        if (decodedItem == null) {
                            return completionHandler(null, new Error(`nav-bar-items.json doesn\'t contain a sub item with ${subItem}`));
                        }
                        const navBarSubItem: NavigationBarSubItem = {
                            id: subItem,
                            name: decodedItem!.name,
                            linkUrl: decodedItem!.link
                        };
                        navBarSubItems.push(navBarSubItem);
                    }
                }
                const navBarItem: NavigationBarItem = {
                    id: navItem["id"],
                    name: decodedItem!.name,
                    linkUrl: decodedItem!.link,
                    subItems: navBarSubItems
                };
                navBarItems.push(navBarItem);
            }
            completionHandler(navBarItems, null);
        });
    }

    /**
     * Decodes a nav bar or sub item.
     * @param {any} data json data
     * @param {string} id id of item
     * @returns {Object} name and link of item
     */
    private decodeItem(data: any, id: string): {name: string, link: string} | null {
        const allNavItems = data["all-nav-items"];
        for (const navItem of allNavItems) {
            if (navItem["id"] == id) {
                return {
                    name: navItem["name"],
                    link: navItem["linkUrl"]
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
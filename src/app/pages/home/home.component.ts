import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import {  DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;
    
    linkItemRows: LinkItem[][] = [];

    constructor(private httpClient: HttpClient) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {
            this.decodeLinkItems();
        });
    }

    ngOnInit(): void {}

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    handleLeftRowWidthChange(width: number) {
        this.leftRowWidth = width;
    }

    decodeLinkItems(): void {
        this.httpClient.get('../../../../assets/link-items.json').subscribe((data: any) => {
            const linkItemIdRows = data[this.deviceTypeListener.deviceType];
            let linkItemRows: LinkItem[][] = [];
            for (const linkItemIdRow of linkItemIdRows) {
                let linkItemRow: LinkItem[] = [];
                for (const linkItemId of linkItemIdRow) {
                    const linkItemsJson = data["link-items"];
                    for (const linkItemJson of linkItemsJson) {
                        if (linkItemJson["id"] == linkItemId) {
                            const linkItem = new LinkItem(linkItemJson);
                            linkItemRow.push(linkItem);
                            break;
                        }
                    }
                }
                linkItemRows.push(linkItemRow);
            }
            this.linkItemRows = linkItemRows;
        });
    }
}

class LinkItem {
    id: string;
    name: string;
    linkUrl: string;
    description: string;
    iconClass: string;
    animation: string;

    constructor(jsonData: any) {
        this.id = jsonData["id"];
        this.name = jsonData["name"];
        this.linkUrl = jsonData["linkUrl"];
        this.description = jsonData["description"];
        this.iconClass = jsonData["iconClass"];
        this.animation = jsonData["animation"];
    }
}
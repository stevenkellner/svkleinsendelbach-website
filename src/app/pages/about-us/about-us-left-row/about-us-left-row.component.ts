import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-about-us-left-row',
    templateUrl: './about-us-left-row.component.html',
    styleUrls: ['./about-us-left-row.component.sass']
})
export class AboutUsLeftRowComponent implements OnInit {

    @Input() activeId: string | undefined;

    deviceTypeListener: DeviceTypeListener;

    leftRowItems: LeftRowItem[] = [];
    
    constructor(private httpClient: HttpClient) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {
            this.decodeLeftRowItems();
        });
    }

    ngOnInit(): void {}

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    decodeLeftRowItems(): void {
        this.httpClient.get('../../../../assets/json-data/nav-bar-items.json').subscribe((data: any) => {
            const leftRowItemsId = data[this.deviceTypeListener.deviceType].find((element: {[x: string]: string}) => element["id"] == "about-us")["sub-items"];
            this.leftRowItems = [];
            for (const leftRowItemId of leftRowItemsId) {
                let leftRowItemJson = data["all-nav-items"].find((element: {[x: string]: string}) => element["id"] == leftRowItemId);
                let leftRowItem = new LeftRowItem(leftRowItemJson);
                this.leftRowItems.push(leftRowItem);
            }
        });
    }
}

class LeftRowItem {
    id: string;

    name: string;

    linkUrl: string;

    constructor(jsonData: any) {
        this.id = jsonData["id"];
        this.name = jsonData["name"];
        this.linkUrl = jsonData["linkUrl"];
    }
}
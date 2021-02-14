import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-sports-home',
    templateUrl: './sports-home.component.html',
    styleUrls: ['./sports-home.component.sass']
})
export class SportsHomeComponent {

    leftRowWidth: number | undefined;

    deviceTypeListener: DeviceTypeListener;

    openingHourItemRows: OpeningHourItem[][] = []; 
    
    activeNavBarId: string = "about-us";

    constructor(private titleService: Title,
        private httpClient: HttpClient) {
        this.titleService.setTitle("Sportheim")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {
            this.decodeOpeningHourItems();
        });
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }

    decodeOpeningHourItems(): void {
        this.httpClient.get('../../../../assets/json-data/opening-hours-items.json').subscribe((data: any) => {
            const openingHourItemIdRows = data[this.deviceTypeListener.deviceType];
            this.openingHourItemRows = [];
            for (const openingHourItemIdRow of openingHourItemIdRows) {
                let openingHourItemRow: OpeningHourItem[] = [];
                for (const openingHourItemId of openingHourItemIdRow) {
                    const openingHourItemJson = data["opening-hours-items"].find((element: {[x: string]: string}) => element["id"] == openingHourItemId);
                    let openingHourItem = new OpeningHourItem(openingHourItemJson);
                    openingHourItemRow.push(openingHourItem);
                }
                this.openingHourItemRows.push(openingHourItemRow);
            }
        });
    }
}

class OpeningHourItem {

    id: string;

    title: string;

    time: string

    constructor(jsonData: any) {
        this.id = jsonData["id"];
        this.title = jsonData["title"];
        this.time = jsonData["time"];
    }
}
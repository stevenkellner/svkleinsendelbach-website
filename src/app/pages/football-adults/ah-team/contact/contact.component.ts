import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceType, DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-football-adults-ah-team-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.sass']
})
export class FootballAdultsAhTeamContactComponent  {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-adult';

    contacts: Contact[][] | null = null;

    constructor(private titleService: Title,
                private httpClient: HttpClient) {
        this.titleService.setTitle('Alte Herren');
        this.deviceTypeListener = new DeviceTypeListener(window, deviceType => {
            this.decodeContacts(deviceType);
        });
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }

    decodeContacts(deviceType: DeviceType): void {
        this.httpClient.get('../../../../../assets/json-data/football-adult-contacts.json').subscribe((data: any) => {
            this.contacts = [];
            let numberInRow: number;
            switch (deviceType) {
                case DeviceType.desktop:
                    numberInRow = 3;
                    break;
                case DeviceType.tablet:
                    numberInRow = 3;
                    break;
                case DeviceType.mobile:
                    numberInRow = 1;
                    break;
            }
            const jsonData = data['ah-team'];
            let row: Contact[] = [];
            let currentNumberInRow = 0;
            for (const contactJson of jsonData) {
                const contact: Contact = contactJson;
                if (currentNumberInRow === numberInRow) {
                    this.contacts.push(row);
                    row = [];
                    currentNumberInRow = 0;
                }
                row.push(contact);
                currentNumberInRow++;
            }
            if (currentNumberInRow !== 0) {
                this.contacts.push(row);
            }
        });
    }
}

interface Contact {
    function: string;
    name: string;
    imageName: string;
    reachable: Reachable[];
}

interface Reachable {
    type: string;
    text: string;
    link: string;
}

import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, HostListener, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-football-adults-left-row',
    templateUrl: './left-row.component.html',
    styleUrls: ['./left-row.component.sass']
})
export class FootballAdultsLeftRowComponent implements AfterViewInit {

    @Input() activePageId: string | undefined;

    expandedLinkId: string | null = null;

    deviceTypeListener: DeviceTypeListener;

    events: Event[] | null = null;

    links: Link[] | null = null;
    
    activeNavBarId: string = "football-adult";

    constructor(private httpClient: HttpClient, 
        private titleService: Title) {
        this.titleService.setTitle("Herrenfußball")
        this.decodeLinks();
        this.decodeEvents();
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngAfterViewInit() {
        this.setExpandedLinkId();
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }

    handleClick(link: Link) {
        this.expandedLinkId = this.expandedLinkId == link.id ? null : link.id;
    }

    setExpandedLinkId() {
        if (!this.activePageId || !this.links) return;
        outer: for (const link of this.links) {
            if (!link.subLinks) continue;
            for (const subLink of link.subLinks) {
                if (subLink.id == this.activePageId) {
                    this.expandedLinkId = link.id;
                    continue outer;
                }
            }
        }
    }

    decodeEvents() {
        this.httpClient.get('../../../../assets/json-data/events.json').subscribe((data: any) => {
            this.events = [];
            for (const eventJson of data["football-adults"]) {
                const event = new Event(eventJson);
                this.events.push(event);
            }
            this.events = this.events.filter(event => event.date.dateStruct >= new Date());
            this.events = this.events.sort((firstEvent, secondEvent) => firstEvent.date > secondEvent.date ? 1 : -1);
        });
    }

    decodeLinks() {
        this.httpClient.get('../../../../assets/json-data/football-adult-links.json').subscribe((data: any) => {
            this.links = [];
            for (const linkJson of data["links"]) {
                const link = new Link(linkJson);
                this.links.push(link);
            }
            this.setExpandedLinkId();
        });
    }
}

class SubLink {

    id: string;

    title: string;

    link: string;

    constructor(jsonData: any) {
        this.id = jsonData["id"];
        this.title = jsonData["title"];
        this.link = jsonData["link"];
    }
}

class Link {

    id: string;

    title: string;

    link: string | undefined;

    subLinks: SubLink[] | undefined;

    constructor(jsonData: any) {
        this.id = jsonData["id"];
        this.title = jsonData["title"];
        this.link = jsonData["link"];
        if (jsonData["sub-items"] != null) {
            this.subLinks = [];
            for (const subLinkJson of jsonData["sub-items"]) {
                const subLink = new SubLink(subLinkJson);
                this.subLinks!.push(subLink);
            }
        }
    }
}

class Event {

    date: CustomDate;

    title: string;

    description: string | undefined;

    link: string | undefined;

    constructor(jsonData: any) {
        this.date = new CustomDate(jsonData["date"]);
        this.title = jsonData["title"];
        this.description = jsonData["description"];
        this.link = jsonData["link"];
    }
}

class CustomDate {

    dateStruct: Date;

    date: string;

    time: string | null;

    constructor(jsonString: string) {
        this.dateStruct = new Date(jsonString);
        this.date = this.dateStruct.getDate() + ". " + this.getMonth() + ". " + this.dateStruct.getFullYear()
        if (!jsonString.includes("T")) {
            this.time = null;
            return;
        }
        this.time = this.dateStruct.getHours() + ":" + this.dateStruct.getMinutes();
    }

    private getMonth(): string {
        let monthList = ["Jan", "Feb", "März", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"];
        return monthList[this.dateStruct.getMonth()];
    }

    formated() : string {
        let result = this.date;
        if (this.time) {
            result += " " + this.time + "Uhr";
        }
        return result;
    }
}
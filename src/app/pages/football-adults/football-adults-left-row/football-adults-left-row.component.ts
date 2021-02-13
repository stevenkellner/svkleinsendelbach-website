import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-football-adults-left-row',
    templateUrl: './football-adults-left-row.component.html',
    styleUrls: ['./football-adults-left-row.component.sass']
})
export class FootballAdultsLeftRowComponent implements OnInit {

    @Input() activePageId: string | undefined;

    deviceTypeListener: DeviceTypeListener;

    events: Event[] = [];

    links: Link[] = [];
    
    activeNavBarId: string = "football-adult";

    constructor(private httpClient: HttpClient, 
        private titleService: Title) {
        this.titleService.setTitle("Herrenfußball")
        this.decodeLinks();
        this.decodeEvents();
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngOnInit(): void {}

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    decodeEvents() {
        this.httpClient.get('../../../../assets/json-data/events.json').subscribe((data: any) => {
            this.events = [];
            for (const eventJson of data["football-adults"]) {
                const event = new Event(eventJson);
                this.events.push(event);
            }
            this.events = this.events.filter(event => event.date >= new Date());
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

    date: Date;

    title: string;

    description: string | undefined;

    link: string | undefined;

    constructor(jsonData: any) {
        this.date = new Date(jsonData["date"]);
        this.title = jsonData["title"];
        this.description = jsonData["description"];
        this.link = jsonData["link"];
    }
}
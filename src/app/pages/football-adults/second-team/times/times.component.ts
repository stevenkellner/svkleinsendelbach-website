import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-adults-second-team-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.sass']
})
export class FootballAdultsSecondTeamTimesComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-adult';

    mapProperties = new MapProperties();

    constructor(private titleService: Title) {
        this.titleService.setTitle('Zweite Mannschaft');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }
    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

class MapProperties {

    zoom = 12;

    center = {
        lat: 49.589936,
        lng: 11.162849
    };

    options = {
        scrollwheel: false,
        maxZoom: 18,
        minZoom: 5
    };

    marker: MapMarker[] = [
        {
            position: {
                lat: 49.589936,
                lng: 11.162849
            }
        }
    ];
}

interface MapMarker {

    position: google.maps.LatLngLiteral;
}

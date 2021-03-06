import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-youth-f-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.sass']
})
export class FootballYouthFTimesComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-youth';

    mapProperties = new MapProperties();

    constructor(private titleService: Title) {
        this.titleService.setTitle('F-Jugend');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }
    @HostListener('window:resize')
    windowChanged(): void  {
        this.deviceTypeListener.windowChanged(window);
    }
}

class MapProperties {

    zoom = 12;

    center = {
        lat: 49.592697,
        lng: 11.158058
    };

    options = {
        scrollwheel: false,
        maxZoom: 18,
        minZoom: 5
    };

    marker: MapMarker[] = [
        {
            position: {
                lat: 49.592697,
                lng: 11.158058
            }
        }
    ];
}

interface MapMarker {

    position: google.maps.LatLngLiteral;
}

import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-drive',
    templateUrl: './drive.component.html',
    styleUrls: ['./drive.component.sass']
})
export class DriveComponent {

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'drive';

    mapProperties = new MapProperties();

    constructor(private titleService: Title) {
        this.titleService.setTitle('Anfahrt');
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
        lat: 49.592270,
        lng: 11.157840
    };

    options = {
        scrollwheel: false,
        maxZoom: 18,
        minZoom: 5
    };

    marker: MapMarker[] = [
        {
            position: {
                lat: 49.592270,
                lng: 11.157840
            }
        }
    ];
}

interface MapMarker {

    position: google.maps.LatLngLiteral;
}

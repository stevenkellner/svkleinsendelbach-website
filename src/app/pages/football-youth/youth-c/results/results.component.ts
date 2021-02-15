import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-youth-c-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class FootballAYouthCResultsComponent implements AfterViewInit {

    @ViewChild('bfv1613388314237') bfvWidget: ElementRef | null = null;

    deviceTypeListener: DeviceTypeListener;
    
    activeNavBarId: string = "football-youth";

    constructor(private titleService: Title,
        private httpClient: HttpClient) {
        this.titleService.setTitle("C-Jugend")
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngAfterViewInit() {
        const teamId = "01HDGFU964000000VV0AG80NVTE4NR7G";
        const options = {
            selectedTab: "teammatches",
            colorResults: "#24252a;}</style><link rel='stylesheet' href='" + window.location.protocol + "//" + window.location.hostname + "/assets/bfvWidgetStyle.css'><style type='text/css'>xy{x:y", 
            colorNav: "#edf0f1", 
            colorClubName: "#1e3799", 
            backgroundNav: "#24252a"
        };
        const iFrame = document.createElement('iframe');
        if (typeof iFrame.setAttribute == 'function') {
            iFrame.setAttribute('allowFullScreen', 'true');
            iFrame.style.border = 'none';
        }
        const bfvHost = window.location.protocol + '//'+'widget-prod.bfv.de';
		const appPath = '/widget/widgetresource/iframe' + ('https:' == document.location.protocol ? '/ssl' : '' ) + '?url=' + window.location.hostname;
        iFrame.src = bfvHost + appPath + '&widget=' + encodeURIComponent('widget/team/complete/team' + teamId + '/' + options.selectedTab + '?css=' + encodeURIComponent(JSON.stringify(options)) + '&referrer=' + window.location.hostname);
        this.bfvWidget?.nativeElement.appendChild(iFrame);
    }

    @HostListener('window:resize')
    windowChanged() {
        this.deviceTypeListener.windowChanged(window);
    }
}
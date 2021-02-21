import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
  selector: 'app-football-adults-second-team-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class FootballAdultsSecondTeamResultsComponent implements AfterViewInit {

    @ViewChild('bfv1613388314237') bfvWidget: ElementRef | null = null;

    deviceTypeListener: DeviceTypeListener;

    activeNavBarId = 'football-adult';

    constructor(private titleService: Title,
                private httpClient: HttpClient) {
        this.titleService.setTitle('Zweite Mannschaft');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngAfterViewInit(): void {
        const teamId = '023G9CQ7GS000000VS548985VU14N0BQ';
        const options = {
            selectedTab: 'teammatches',
            colorResults: '#24252a;}</style><link rel=\'stylesheet\' href=\'' + window.location.protocol + '//' + window.location.hostname
                + '/assets/bfvWidgetStyle.css\'><style type=\'text/css\'>xy{x:y',
            colorNav: '#edf0f1',
            colorClubName: '#1e3799',
            backgroundNav: '#24252a'
        };
        const iFrame = document.createElement('iframe');
        if (typeof iFrame.setAttribute === 'function') {
            iFrame.setAttribute('allowFullScreen', 'true');
            iFrame.style.border = 'none';
        }
        const bfvHost = window.location.protocol + '//' + 'widget-prod.bfv.de';
        const appPath = '/widget/widgetresource/iframe' + ('https:' === document.location.protocol ? '/ssl' : '' ) + '?url='
            + window.location.hostname;
        iFrame.src = bfvHost + appPath + '&widget=' + encodeURIComponent('widget/team/complete/team' + teamId + '/' + options.selectedTab + '?css='
            + encodeURIComponent(JSON.stringify(options)) + '&referrer=' + window.location.hostname);
        this.bfvWidget?.nativeElement.appendChild(iFrame);
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DynamicPagesService } from 'src/app/services/dynamic-pages.service';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';

@Component({
    selector: 'app-news-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.sass']
})
export class NewsDetailsComponent implements AfterViewInit {

    @ViewChild('textSection') textSection: ElementRef | undefined;

    deviceTypeListener: DeviceTypeListener;

    title = 'Nachricht';

    constructor(private titleService: Title,
                private router: Router,
                private dynamicPagesService: DynamicPagesService) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngAfterViewInit(): void {
        this.dynamicPagesService.getNews(allNews => {
            const address = this.router.url.split('/')[2];
            const news = allNews.find(element => element.address === address);
            if (!news) {
                this.router.navigateByUrl('pageNotFound');
                return;
            }
            this.titleService.setTitle(news.title);
            this.dynamicPagesService.getPage(news.url, content => {
                if (!this.textSection) { return; }
                this.textSection.nativeElement.innerHTML = content;
            });
        });
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

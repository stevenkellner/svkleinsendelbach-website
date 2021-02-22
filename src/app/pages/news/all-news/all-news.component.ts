import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeviceTypeListener } from 'src/app/_template/header/header.component';
import { DynamicPagesService, News } from 'src/app/services/dynamic-pages.service';

@Component({
    selector: 'app-all-news',
    templateUrl: './all-news.component.html',
    styleUrls: ['./all-news.component.sass']
})
export class AllNewsComponent {

    deviceTypeListener: DeviceTypeListener;

    allNews: News[] | null = null;

    title = 'Alle Nachrichten';

    constructor(private titleService: Title,
                private dynamicPagesService: DynamicPagesService) {
        this.titleService.setTitle('Alle Nachrichten');
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
        this.dynamicPagesService.getNews(allNews => {
            this.allNews = allNews.sort((firstNews, secondNews) => firstNews.date > secondNews.date ? 1 : -1);
        });
    }

    @HostListener('window:resize')
    windowChanged(): void {
        this.deviceTypeListener.windowChanged(window);
    }
}

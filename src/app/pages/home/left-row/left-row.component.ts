import { Component } from '@angular/core';
import { DynamicPagesService, News } from 'src/app/services/dynamic-pages.service';

@Component({
    selector: 'app-home-left-row',
    templateUrl: './left-row.component.html',
    styleUrls: ['./left-row.component.sass']
})
export class HomeLeftRowComponent {

    allNews: News[] | null = null;

    showAllNewsButtonVisible = false;

    constructor(private dynamicPagesService: DynamicPagesService) {
        this.dynamicPagesService.getNews(allNews => {
            const maxNews = 3;
            this.allNews = allNews.sort((firstNews, secondNews) => firstNews.date > secondNews.date ? 1 : -1).slice(0, maxNews);
            this.showAllNewsButtonVisible = allNews.length > maxNews;
        });
    }
}

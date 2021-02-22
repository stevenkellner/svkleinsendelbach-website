import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DynamicPagesService {

    constructor(private httpClient: HttpClient) {}

    getNews(handler: (allNews: News[]) => void): void {
        const url = "https://raw.githubusercontent.com/stevenkellner/svkleinsendelbach-website/dynamic-pages/_scripts/files.json";
        this.httpClient.get(url).subscribe((data: any) => {
            const allNews: News[] = [];
            data.news.forEach((newsJson: any) => {
                const news: News = newsJson;
                news.date = new Date(newsJson.date);
                allNews.push(news);
            });
            handler(allNews);
        });
    }
}

export interface News {
    title: string;
    address: string;
    date: Date;
    image?: string;
    describtion?: string;
    url: string;
}

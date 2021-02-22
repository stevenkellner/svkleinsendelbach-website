import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    getPage(url: string, handler: (content: string | null) => void): void {
        this.httpClient.get(url, {
            responseType: 'text'
        }).subscribe(data => {
            handler(data)
        }, () => {
            handler(null);
        });
    }
}

export interface News {
    title: string;
    address: string;
    date: Date;
    image?: string;
    description?: string;
    url: string;
}

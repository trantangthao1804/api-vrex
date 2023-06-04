import { NewsService } from "../services/news.service";
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    GetUIPostCategoryList(query: any): object;
    getUIList(query: any): object;
    getDetails(query: any): object;
}

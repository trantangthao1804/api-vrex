import { HomePageService } from "../services/home-page.service";
import { ProjectService } from "../services/project.service";
import { ListingService } from "../services/listing.service";
import { NewsService } from "../services/news.service";
export declare class HomePageController {
    private readonly homePageService;
    private readonly projectService;
    private readonly listingService;
    private readonly newsService;
    constructor(homePageService: HomePageService, projectService: ProjectService, listingService: ListingService, newsService: NewsService);
    getHomeData(): object;
}

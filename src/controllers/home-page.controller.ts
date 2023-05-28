import {Controller, Get} from '@nestjs/common';
import {HomePageService} from "../services/home-page.service";
import {ProjectService} from "../services/project.service";
import {ListingService} from "../services/listing.service";
import {NewsService} from "../services/news.service";

import {ApiTags, ApiOperation} from '@nestjs/swagger';

@ApiTags('Home Page')
@Controller('home-page')
export class HomePageController {
    constructor(
        private readonly homePageService: HomePageService,
        private readonly projectService: ProjectService,
        private readonly listingService: ListingService,
        private readonly newsService: NewsService,

    ) {

    }

    @ApiOperation({
        summary: 'Lấy dữ liệu trang chủ',
        description: ``,
    })
    @Get('getHomeData')
    getHomeData(): object {
        const banners = this.homePageService.getHomeBanner();
        const project = this.projectService.getHomeProject();
        const listings = this.listingService.getHomeListings();
        const news = this.newsService.getHomeNews();
        return {
            banners,
            project,
            listings,
            news
        }
    }
}

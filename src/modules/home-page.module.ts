import { Module } from '@nestjs/common';
import { HomePageController } from '../controllers/home-page.controller';
import { HomePageService } from '../services/home-page.service';
import { ProjectService } from '../services/project.service';
import { ListingService } from '../services/listing.service';
import { NewsService } from '../services/news.service';
@Module({
    controllers: [ HomePageController],
    providers: [HomePageService,ProjectService,ListingService,NewsService],
})
export class HomePageModule {}

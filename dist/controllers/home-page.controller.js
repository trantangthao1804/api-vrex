"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageController = void 0;
const common_1 = require("@nestjs/common");
const home_page_service_1 = require("../services/home-page.service");
const project_service_1 = require("../services/project.service");
const listing_service_1 = require("../services/listing.service");
const news_service_1 = require("../services/news.service");
const swagger_1 = require("@nestjs/swagger");
let HomePageController = class HomePageController {
    constructor(homePageService, projectService, listingService, newsService) {
        this.homePageService = homePageService;
        this.projectService = projectService;
        this.listingService = listingService;
        this.newsService = newsService;
    }
    getHomeData() {
        const banners = this.homePageService.getHomeBanner();
        const project = this.projectService.getHomeProject();
        const listings = this.listingService.getHomeListings();
        const news = this.newsService.getHomeNews();
        return {
            banners,
            project,
            listings,
            news
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Lấy dữ liệu trang chủ',
        description: ``,
    }),
    (0, common_1.Get)('getHomeData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], HomePageController.prototype, "getHomeData", null);
HomePageController = __decorate([
    (0, swagger_1.ApiTags)('Home Page'),
    (0, common_1.Controller)('home-page'),
    __metadata("design:paramtypes", [home_page_service_1.HomePageService,
        project_service_1.ProjectService,
        listing_service_1.ListingService,
        news_service_1.NewsService])
], HomePageController);
exports.HomePageController = HomePageController;
//# sourceMappingURL=home-page.controller.js.map
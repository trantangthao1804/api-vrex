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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("../services/news.service");
const swagger_1 = require("@nestjs/swagger");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    GetUIPostCategoryList(query) {
        return {
            items: this.newsService.getUIPostCategoryList(),
            newsTags: this.newsService.getNewsTags(),
            allNewsCategory: this.newsService.getAllNewsCategory(),
            newsViewMore: this.newsService.getNewsViewMore(),
        };
    }
    getUIList(query) {
        const { filterKeyword, page, pageSize, postCategoryId } = query;
        const { totalItems, items } = this.newsService.getUIList(filterKeyword, page, pageSize, postCategoryId);
        const object = {
            totalItems: totalItems,
            items: items,
            newsTags: this.newsService.getNewsTags(),
            allNewsCategory: this.newsService.getAllNewsCategory(),
            newsViewMore: this.newsService.getNewsViewMore(),
        };
        if (postCategoryId) {
            object["postCategoryId"] = postCategoryId;
            object['postCategory'] = items.length > 0 ? items[0].postCategoryName : '';
        }
        return object;
    }
    getDetails(query) {
        const { id } = query;
        const detail = this.newsService.getDetails(id);
        if (!detail)
            return {};
        return {
            detail,
            newsTags: this.newsService.getNewsTags(),
            allNewsCategory: this.newsService.getAllNewsCategory(),
            newsViewMore: this.newsService.getNewsViewMore(),
            relatedNews: this.newsService.getRelateNews(detail.postCategoryId, id)
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Lấy dữ danh sách tin tức',
        description: ``,
    }),
    (0, common_1.Get)('getUIPostCategoryList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], NewsController.prototype, "GetUIPostCategoryList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Lấy dữ danh sách tin tức theo danh mục hoặc từ khoá',
        description: ``,
    }),
    (0, common_1.Get)('getUIList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], NewsController.prototype, "getUIList", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Chi tiết tin tức',
        description: ``,
    }),
    (0, common_1.Get)('getDetails'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], NewsController.prototype, "getDetails", null);
NewsController = __decorate([
    (0, swagger_1.ApiTags)('News'),
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map
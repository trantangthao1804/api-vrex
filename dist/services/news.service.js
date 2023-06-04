"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const news_1 = require("../mocks/news");
const utils_1 = require("../utils");
let NewsService = class NewsService {
    getHomeNews() {
        return news_1.homeNews;
    }
    getUIPostCategoryList() {
        const arr = news_1.newsSearch.map(p => ({
            id: p.postCategoryId,
            postCategoryName: p.postCategoryName
        }));
        return arr.map(p => (Object.assign(Object.assign({}, p), { posts: (0, utils_1.paginate)(news_1.newsSearch.filter(pp => pp.postCategoryId == p.id), 4, 1) })));
    }
    getNewsTags() {
        return news_1.newsTags;
    }
    getAllNewsCategory() {
        return news_1.allNewsCategory;
    }
    getNewsViewMore() {
        return news_1.newsViewMore;
    }
    getUIList(filterKeyword, page, pageSize, postCategoryId) {
        let arr = news_1.newsSearch;
        if (filterKeyword) {
            arr = arr.filter(p => p.name.includes(filterKeyword));
        }
        if (postCategoryId) {
            arr = arr.filter(p => p.postCategoryId == postCategoryId);
        }
        return {
            totalItems: arr.length,
            items: (0, utils_1.paginate)(arr, pageSize, page)
        };
    }
    getDetails(id) {
        return news_1.newsDetails.find(p => p.id == id);
    }
    getRelateNews(postCategoryId, newsId) {
        return (0, utils_1.paginate)(news_1.newsSearch.filter(p => p.postCategoryId == postCategoryId && p.id != newsId), 3, 1);
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)()
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map
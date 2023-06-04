import {Controller, Get, Query} from '@nestjs/common';
import {NewsService} from "../services/news.service";

import {ApiTags, ApiOperation} from '@nestjs/swagger';
import {allNewsCategory} from "../mocks/news";

@ApiTags('News')
@Controller('news')
export class NewsController {
    constructor(
        private readonly newsService: NewsService,
    ) {

    }

    @ApiOperation({
        summary: 'Lấy dữ danh sách tin tức',
        description: ``,
    })
    @Get('getUIPostCategoryList')
    GetUIPostCategoryList(@Query() query): object {
        // const {page,pageSize} =query
        return {
            items: this.newsService.getUIPostCategoryList(),
            newsTags: this.newsService.getNewsTags(),
            allNewsCategory: this.newsService.getAllNewsCategory(),
            newsViewMore: this.newsService.getNewsViewMore(),

        }
    }


    @ApiOperation({
        summary: 'Lấy dữ danh sách tin tức theo danh mục hoặc từ khoá',
        description: ``,
    })
    @Get('getUIList')
    getUIList(@Query() query): object {
        const {filterKeyword, page, pageSize, postCategoryId} = query

        const {totalItems, items} = this.newsService.getUIList(filterKeyword, page, pageSize, postCategoryId)

        const object = {
            totalItems: totalItems,
            items: items,
            newsTags: this.newsService.getNewsTags(),
            allNewsCategory: this.newsService.getAllNewsCategory(),
            newsViewMore: this.newsService.getNewsViewMore(),
        }

        if (postCategoryId) {
            object["postCategoryId"] = postCategoryId
            object['postCategory'] = items.length > 0 ? items[0].postCategoryName : ''
        }
        return object
    }

    @ApiOperation({
        summary: 'Chi tiết tin tức',
        description: ``,
    })

    @Get('getDetails')
    getDetails(@Query() query): object {
        const {id} = query
        const detail = this.newsService.getDetails(id)
        if(!detail)
            return {}
        return {
            detail,
            newsTags: this.newsService.getNewsTags(),
            allNewsCategory: this.newsService.getAllNewsCategory(),
            newsViewMore: this.newsService.getNewsViewMore(),
            relatedNews:this.newsService.getRelateNews(detail.postCategoryId,id)
        }
    }

}

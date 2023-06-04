import {Injectable} from '@nestjs/common';
import {homeNews, newsSearch, newsDetails, newsTags, allNewsCategory, newsViewMore} from '../mocks/news'
import {paginate} from '../utils'
@Injectable()
export class NewsService {
    getHomeNews(): object {
        return homeNews;
    }

    getUIPostCategoryList() {

        const arr = newsSearch.map(p => (
            {
                id:p.postCategoryId,
                postCategoryName: p.postCategoryName
            }
        ))

        return arr.map(p=>({
            ...p,
            posts: paginate(newsSearch.filter(pp=>pp.postCategoryId==p.id),4,1)
        }))
    }
    getNewsTags(){
        return newsTags
    }
    getAllNewsCategory(){
        return allNewsCategory
    }
    getNewsViewMore(){
        return newsViewMore
    }

    getUIList(filterKeyword,page,pageSize,postCategoryId){
        let arr = newsSearch
        if(filterKeyword){
            arr=arr.filter(p=>p.name.includes(filterKeyword))
        }

        if(postCategoryId){
            arr=arr.filter(p=>p.postCategoryId==postCategoryId)
        }

        return {
            totalItems:arr.length,
            items:paginate(arr,pageSize,page)
        }
    }

    getDetails(id){
        return newsDetails.find(p=>p.id==id)
    }

    getRelateNews(postCategoryId,newsId){
        return paginate(newsSearch.filter(p=>p.postCategoryId==postCategoryId && p.id!=newsId),3,1)
    }

}

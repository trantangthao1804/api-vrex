export declare class NewsService {
    getHomeNews(): object;
    getUIPostCategoryList(): {
        posts: any;
        id: number;
        postCategoryName: string;
    }[];
    getNewsTags(): string;
    getAllNewsCategory(): {
        id: number;
        name: string;
        detailUrl: string;
        children: {
            id: number;
            name: string;
            detailUrl: string;
        }[];
    }[];
    getNewsViewMore(): {
        name: string;
        isVip: boolean;
        avatarUrl: string;
        videoUrl: any;
        displayOrder: number;
        creationTime: string;
        shortDescription: string;
        issueDate: string;
        tags: string;
        postCategoryId: number;
        postCategoryName: string;
        postCategorySlug: string;
        postCategoryDetailUrl: string;
        id: number;
        detailUrl: string;
    }[];
    getUIList(filterKeyword: any, page: any, pageSize: any, postCategoryId: any): {
        totalItems: number;
        items: any;
    };
    getDetails(id: any): {
        name: string;
        id: number;
        avatarUrl: string;
        shortDescription: string;
        fullDescription: string;
        bannerUrl: string;
        videoUrl: string;
        creationTime: string;
        postType: number;
        postCategoryName: string;
        postCategorySlug: string;
        postCategoryId: string;
        postCategoryDetailUrl: string;
        tags: string;
        canonicalUrl: any;
        metaTitle: string;
        metaDescription: string;
        metaImage: any;
        facebookTitle: any;
        facebookDescription: any;
        facebookImageUrl: any;
    };
    getRelateNews(postCategoryId: any, newsId: any): any;
}

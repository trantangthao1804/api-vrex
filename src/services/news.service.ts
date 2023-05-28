import { Injectable } from '@nestjs/common';
import {homeNews} from '../mocks/news'
@Injectable()
export class NewsService {
    getHomeNews(): object {
        return homeNews;
    }
}

import { Injectable } from '@nestjs/common';
import {HomeBanner} from '../mocks/banner'
@Injectable()
export class HomePageService {
    getHomeBanner(): object {
        return HomeBanner;
    }
}

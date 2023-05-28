import { Injectable } from '@nestjs/common';
import {homeListings} from '../mocks/listing'
@Injectable()
export class ListingService {
    getHomeListings(): object {
        return homeListings;
    }
}

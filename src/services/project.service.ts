import { Injectable } from '@nestjs/common';
import {homeProject} from '../mocks/project'
@Injectable()
export class ProjectService {
    getHomeProject(): object {
        return homeProject;
    }
}

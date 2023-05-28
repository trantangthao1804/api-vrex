import {Controller, Get, Param, Res, StreamableFile} from '@nestjs/common';
// import {UploadService} from "../services/home-page.service";
import { ApiTags,ApiOperation } from '@nestjs/swagger';
import { createReadStream } from 'fs';
import {join} from "path";
import { Response } from 'express';
@ApiTags('Upload')
@Controller('uploads')
export class UploadController {
    // constructor(private readonly uploadService: UploadService) {}

    @Get(':imageName')
    getImage(@Param() params: any, @Res({ passthrough: true }) res: Response): StreamableFile {
        res.set('Content-Type', 'image/jpg');
        const imageLocation = join(process.cwd(), 'uploads/images', params.imageName);
        const file = createReadStream(imageLocation);
        return new StreamableFile(file);
    }
}

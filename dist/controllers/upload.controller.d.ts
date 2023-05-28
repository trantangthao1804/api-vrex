import { StreamableFile } from '@nestjs/common';
import { Response } from 'express';
export declare class UploadController {
    getImage(params: any, res: Response): StreamableFile;
}

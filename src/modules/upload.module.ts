import { Module } from '@nestjs/common';
import { UploadController } from '../controllers/upload.controller';
// import { HomePageService } from '../services/home-page.service';
@Module({
    controllers: [ UploadController],
    // providers: [HomePageService],
})
export class UploadModule {}

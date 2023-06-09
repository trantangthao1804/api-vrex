import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
// import {ServeStaticModule} from '@nestjs/serve-static';
// import {join} from 'path';
import {AppService} from './app.service';
import {HomePageModule} from './modules/home-page.module';
import {UploadModule} from './modules/upload.module';
import {NewsModule} from './modules/news.module';

@Module({
    imports: [
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '../', 'uploads'),
        // }),
        HomePageModule,
        UploadModule,
        NewsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
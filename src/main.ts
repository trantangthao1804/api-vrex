import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configSwagger } from './configs/api-docs.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3200',
      'https://VREX-DEMO.vercel.app/',
    ],
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE","OPTIONS"],
    credentials: true,
  });

  configSwagger(app);
  await app.listen(3000);

}
bootstrap();

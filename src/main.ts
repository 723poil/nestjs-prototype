import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import expressBasicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  /**
   * 스웨거 접속시 로그인하고 들어갈수 있도록 설정
   */
  app.use(
    ['/swagger'],
    expressBasicAuth({
      users: { 
        'shopchain': 'supershopchain',
      },
      challenge: true,
    })
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,              // json 데이터의 string들을 타입에 맞게 변환시켜줌 (class-transformer 모듈 필요)
    })
  );

  /**
   * 스웨거 설정
   */
  const config = new DocumentBuilder()
    .setTitle('nestjs example')
    .setDescription('The nestjs API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();

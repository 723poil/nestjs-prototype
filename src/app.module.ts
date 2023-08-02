import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', // localhost로 하면 오류발생함
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      synchronize: true, // 개발단계에서만 사용
      logging: true,     // 콘솔에 로그 출력
      entities: [Book],  // 사용할 엔티티 추가해줘야함
    }),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

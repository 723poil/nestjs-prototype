import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { TypeOrmExModule } from 'src/config/database/typeorm-ex.module';
import { BookRepository } from './books.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    TypeOrmExModule.forCustomRepository([BookRepository]),
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}

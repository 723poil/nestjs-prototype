import { Controller, Get, Post, Body, ForbiddenException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { CreateBookResDto } from './dto/create-book-res.dto';
import { TestDto } from './dto/test-dto';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<CreateBookResDto> {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async get() {
    throw new ForbiddenException();
  }

  @Get('test')
  async test(): Promise<TestDto> {
    return await this.booksService.test();
  }

  @Get('test2')
  async test2(): Promise<Book> {
    return await this.booksService.test2();
  }

  @Get('test3')
  async test3(): Promise<TestDto> {
    return await this.booksService.test3();
  }
}

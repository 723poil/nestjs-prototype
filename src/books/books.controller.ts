import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, ForbiddenException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookResDto } from './dto/create-book-res.dto';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';

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
}

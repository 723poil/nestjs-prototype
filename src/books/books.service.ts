import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookResDto } from './dto/create-book-res.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>
  ) {}

  /**
   * DTO객체를 entity로 변환시켜서 DB에 저장
   * @param createBookDto 
   * @returns Promise&lt;CreateBookResDto&gt;
   */
  async create(createBookDto: CreateBookDto): Promise<CreateBookResDto> {

    const book = createBookDto.toEntity();
    const newBook = this.booksRepository.create(book);

    return CreateBookResDto.of(await this.booksRepository.save(newBook));
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { DataSource, EntityManager } from 'typeorm';
import { CreateBookResDto } from './dto/create-book-res.dto';
import { TestDto } from './dto/test-dto';
import { BookRepository } from './books.repository';

@Injectable()
export class BooksService {
  private manager: EntityManager
  constructor(
    @InjectRepository(Book)
    private booksRepository: BookRepository,
    private dataSource: DataSource
  ) {
    this.manager = dataSource.manager;
  }

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

  async test(): Promise<TestDto> {

    
    let book: TestDto = TestDto.toTestDto(
      await this.manager.query(
        'SELECT b.id, b.author, b.name FROM book b WHERE b.id = ?', 
        [ 1 ]
      )
    );

    return book;
  }

  async test2(): Promise<Book> {

    return await this.booksRepository
      .createQueryBuilder()
      .where("Book.id = :id", { id: 1 })
      .getOne();
  }

  async test3(): Promise<TestDto> {

    const book = await this.booksRepository
      .createQueryBuilder()
      .where("Book.id = :id", { id: 1 })
      .select([
        'Book.id',
        'Book.author',
        'Book.name'
      ])
      .getOne();

    return book.toTestDto();
  }
}

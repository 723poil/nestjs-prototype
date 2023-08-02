import { IsString } from "class-validator";
import { Book } from "../entities/book.entity";
import { ApiProperty } from "@nestjs/swagger";

/**
 * book create request DTO로 사용
 * 
 * entity로 변환하는 함수 내장되어 있음
 */
export class CreateBookDto {

    @ApiProperty({
        example: '자까',
        name: 'author',
        required: true,
    })
    @IsString()
    readonly author: string;

    @ApiProperty({
        example: '김자까',
        name: 'name',
        required: true,
    })
    @IsString()
    readonly name: string;


    /**
     * DTO를 entity로 변환시켜주는 함수
     * @returns Book
     */
    public toEntity(): Book {
        let newBook: Book = new Book();
        newBook.author = this.author;
        newBook.name = this.name;

        return newBook;
    }
}

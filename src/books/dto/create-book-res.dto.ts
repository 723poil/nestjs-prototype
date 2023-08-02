import { Book } from "../entities/book.entity";

export class CreateBookResDto {
    id: number;

    /**
     * constructor로 사용하게되면 데이터가 잘못들어갔을때 error 캐치를 하지 못하게됨.
     * 
     * error 처리를 위해 static of 사용
     * @param book 
     * @returns CreateBookResDto
     */
    static of(book: Book): CreateBookResDto {
        return {
            id: book.id
        };
    };
}
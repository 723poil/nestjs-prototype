import { Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { CustomRepository } from "src/config/database/typeorm-ex.decorator";

@CustomRepository(Book)
export class BookRepository extends Repository<Book>{
    
}
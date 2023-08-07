import { Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { CustomRepository } from "src/config/custom-repository/typeorm-ex.decorator";

@CustomRepository(Book)
export class BookRepository extends Repository<Book>{
    
}
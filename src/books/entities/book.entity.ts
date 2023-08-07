import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TestDto } from "../dto/test-dto";
import { classToPlain, classToPlainFromExist, plainToClass } from "class-transformer";

@Entity({ name: 'book' })
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    public toTestDto(): TestDto {
        return new TestDto(this.id, this.author, this.name);
    }
}

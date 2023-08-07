import { InternalServerErrorException } from "@nestjs/common";

export class TestDto {

    id:number;
    author:string;
    name:string;

    constructor(id:number, author:string, name:string) {
        if (id == undefined || author == undefined || name == undefined) {
            throw new InternalServerErrorException();
        }
        this.id = id;
        this.author = author;
        this.name = name;
    }

    static of([data]: [{id:number, author:string, name:string}]): TestDto {
        return new TestDto(data.id, data.author, data.name)
    }
}
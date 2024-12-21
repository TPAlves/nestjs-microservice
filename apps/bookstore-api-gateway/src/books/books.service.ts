import { BOOK_PATTERNS } from '@app/contracts/books/books.patterns';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS') private booksClient: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send(BOOK_PATTERNS.CREATE, createBookDto);
  }

  findAll() {
    return this.booksClient.send(BOOK_PATTERNS.FIND_ALL, {});
  }

  findOne(id: number) {
    return this.booksClient.send(BOOK_PATTERNS.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send(BOOK_PATTERNS.UPDATE, {
      id,
      ...updateBookDto,
    });
  }

  remove(id: number) {
    return this.booksClient.send(BOOK_PATTERNS.REMOVE, id);
  }
}

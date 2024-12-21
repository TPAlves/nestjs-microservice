import { BookDto } from '@app/contracts/books/book.dto';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      name: 'Dragon Ball',
      author: 'Akira Toriyama',
      year: 1984,
    },
    {
      id: 2,
      name: 'Dragon Ball Super',
      author: 'Akira Toriyama',
      year: 2015,
    },
  ];

  create(createBookDto: CreateBookDto) {
    createBookDto.id = this.books.length + 1;
    this.books.push(createBookDto);
    return createBookDto;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((book) => book.id == id);
    if (book) {
      return book;
    }
    throw new NotFoundException(`Livro com o ${id} inexistente`);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    this.findOne(id);
    const index = this.books.findIndex((book) => book.id == id);
    this.books[index] = updateBookDto as BookDto;
    return this.books[index];
  }

  remove(id: number) {
    this.findOne(id);
    this.books = this.books.filter((book) => book.id !== id);
    return `Item ${id} apagado com sucesso`;
  }
}

import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKS',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
})
export class BooksModule {}

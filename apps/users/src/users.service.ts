import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'Enzo',
      age: 8,
    },
    {
      id: 2,
      firstName: 'Neymar',
      age: 40,
    },
  ];

  findAll() {
    return this.users;
  }
}

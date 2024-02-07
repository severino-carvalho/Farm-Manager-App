import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/entities/User';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';

@Injectable()
export class UsersRepository implements IUsersRepository {
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

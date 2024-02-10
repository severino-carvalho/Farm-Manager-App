import { User } from 'src/core/entities/entities/User';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { IUseCase } from '../IUseCase';

export class ListUsersUseCase implements IUseCase<User[]> {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }
}

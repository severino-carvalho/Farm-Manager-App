import { BadRequestException } from '@nestjs/common';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { UserOrm } from 'src/infra/orms/entities/entities/UserOrm';
import { IUseCase } from '../IUseCase';

export class DeleteUserUseCase implements IUseCase<UserOrm> {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<UserOrm> {
    if (!id) throw new BadRequestException('Invalid id');

    const userExists = await this.usersRepository.findById(id);

    if (!userExists) throw new BadRequestException('User not found');

    return await this.usersRepository.delete(id);
  }
}

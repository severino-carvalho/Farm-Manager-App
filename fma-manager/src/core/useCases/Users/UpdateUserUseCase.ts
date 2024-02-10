import { BadRequestException } from '@nestjs/common';
import { UpdateUserDto } from 'src/core/dtos/UserDto/UpdateUserDto';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { UserOrm } from 'src/infra/orms/entities/entities/UserOrm';
import { IUseCase } from '../IUseCase';

export class UpdateUserUseCase implements IUseCase<UserOrm> {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userId: string, userData: UpdateUserDto): Promise<UserOrm> {
    if (!userData) throw new BadRequestException('Invalid data');

    const { email, ...data } = userData;

    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) throw new BadRequestException('User not found');

    return await this.usersRepository.update(userId, data);
  }
}

import { BadRequestException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/UserDto/CreateUserDto';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { UserOrm } from 'src/infra/orms/entities/entities/UserOrm';
import { IUseCase } from '../IUseCase';

export class CreateUserUseCase implements IUseCase<UserOrm> {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: CreateUserDto): Promise<UserOrm> {
    if (!data) throw new BadRequestException('Invalid data');

    if (!data.password) throw new BadRequestException('Password is required');

    if (data.password.length < 12)
      throw new BadRequestException('Password must be at least 12 characters');

    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) throw new ConflictException('User already exists');

    return await this.usersRepository.create(data);
  }
}

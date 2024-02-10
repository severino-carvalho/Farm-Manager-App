import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { Repository } from 'typeorm';
import { UserOrm } from '../../entities/entities/UserOrm';
import GenericRepository from '../GenericRep';

@Injectable()
export class UsersRepository
  extends GenericRepository<UserOrm>
  implements IUsersRepository
{
  constructor(
    @InjectRepository(UserOrm)
    private readonly usuariosRepository: Repository<UserOrm>,
  ) {
    super(usuariosRepository);
  }

  async findByEmail(email: string): Promise<UserOrm> {
    return await this.usuariosRepository.findOne({ where: { email } });
  }
}

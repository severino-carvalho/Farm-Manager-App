import { Module } from '@nestjs/common';
import { UsersRepository } from './typeorm/UsersRepository';

const repositories = [UsersRepository];

@Module({
  imports: [],
  providers: repositories,
  exports: repositories,
})
export class OrmModule {}

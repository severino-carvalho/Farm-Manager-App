import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasource } from 'src/config/TypeORM';
import { UserOrm } from './entities/entities/UserOrm';
import { UsersRepository } from './typeorm/repositories/UsersRepository';

const repositories = [UsersRepository];

@Module({
  imports: [
    TypeOrmModule.forRoot(datasource.options),
    TypeOrmModule.forFeature([UserOrm]),
  ],
  providers: repositories,
  exports: repositories,
})
export class OrmModule {}

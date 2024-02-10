import { TypeOrmUtils } from 'src/shared/Utils/Orms/TypeORM/TypeOrm';
import { ObjectLiteral, Repository } from 'typeorm';
import { IGenericRepository } from '../../../core/repositories/IGenericRepository';
import { EntityOrm } from '../entities/EntityORM';

export default abstract class GenericRepository<T extends EntityOrm>
  implements IGenericRepository<T>
{
  constructor(private readonly repository: Repository<ObjectLiteral>) {}

  findAll(): Promise<T[]> {
    return this.repository.find() as Promise<T[]>;
  }

  findById(id: string): Promise<T> {
    TypeOrmUtils.verifyIdFormat(id);

    return this.repository.findOne({
      where: { id },
    }) as Promise<T>;
  }

  create(data: Partial<T>): Promise<T> {
    return this.repository.save(data) as Promise<T>;
  }

  update(id: string, data: Partial<T>): Promise<T> {
    return this.repository.save({ id, ...data }) as Promise<T>;
  }

  async delete(id: string): Promise<T> {
    const { raw } = await this.repository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .returning('*')
      .execute();

    return raw as T;
  }
}

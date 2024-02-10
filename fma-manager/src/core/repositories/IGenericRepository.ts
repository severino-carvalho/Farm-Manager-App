import { EntityOrm } from 'src/infra/orms/entities/EntityORM';

export interface IGenericRepository<T extends EntityOrm> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<T>;
}

import { UserOrm } from 'src/infra/orms/entities/entities/UserOrm';
import { IGenericRepository } from '../IGenericRepository';

export interface IUsersRepository extends IGenericRepository<UserOrm> {
  findByEmail(email: string): Promise<UserOrm>;
}

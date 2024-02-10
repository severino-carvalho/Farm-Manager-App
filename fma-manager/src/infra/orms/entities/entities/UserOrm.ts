import { Column, Entity } from 'typeorm';
import { EntityOrm } from '../EntityORM';

@Entity({ name: 'User' })
export class UserOrm extends EntityOrm {
  @Column()
  fullName: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

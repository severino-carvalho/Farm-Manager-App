import { Entity } from '../Entity';

export class User extends Entity {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

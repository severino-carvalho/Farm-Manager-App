import { UserOrm } from '../../src/infra/orms/entities/entities/UserOrm';

export enum UsuariosIdEnum {
  ROOT = '4596af3f-cc6a-4e45-a50d-19101325bca0',
  DUCK = '0be25d2d-984d-452c-81da-4dd41185eac3',
}

export const usuairos: Partial<UserOrm>[] = [
  {
    id: UsuariosIdEnum.ROOT,
    fullName: 'usuario root',
    username: 'root',
    email: 'root@root.com',
    password: '$2b$06$mHNAE49yhiTKoP/X7o3fbeIVX20sya5uDDwtua5P5hKoMmHqi0kze',
  },
  {
    id: UsuariosIdEnum.DUCK,
    fullName: 'duck duck go',
    username: 'duck',
    email: 'duck@duck.com',
    password: '$2b$06$kbKvcTGL7sw4kKsP.YbHw.GStm7Oyt0jgMHa8JKKNGVsS.UhSr2ZC',
  },
];

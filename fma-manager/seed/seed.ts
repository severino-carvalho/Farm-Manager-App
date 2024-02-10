import { datasource } from '../src/config/TypeORM';
import { UserOrm } from '../src/infra/orms/entities/entities/UserOrm';
import { usuairos } from './data/usuarios';

datasource
  .initialize()
  .then(async (datasoruce) => {
    await datasoruce.synchronize();

    const usuariosRepository = datasoruce.getRepository(UserOrm);

    await usuariosRepository.save(usuairos);

    datasoruce.destroy();
  })
  .catch((err) => {
    console.log('Erro ao carregar dados do Seed');
    console.log(err);
  });

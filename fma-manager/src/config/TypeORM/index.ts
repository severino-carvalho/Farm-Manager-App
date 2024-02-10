import { ConfigService } from '@nestjs/config';
import { UserOrm } from 'src/infra/orms/entities/entities/UserOrm';
import { EnvVariables } from 'src/shared/Enums';
import { DataSource } from 'typeorm';

const configService = new ConfigService();

export const datasource = new DataSource({
  type: 'postgres',
  host: configService.get<string>(EnvVariables.DATABASE_HOST),
  port: configService.get<number>(EnvVariables.DATABASE_PORT),
  username: configService.get<string>(EnvVariables.DATABASE_USER),
  password: configService.get<string>(EnvVariables.DATABASE_PASSWORD),
  database: configService.get<string>(EnvVariables.DATABASE_DATABASE),
  entities: [UserOrm],
});

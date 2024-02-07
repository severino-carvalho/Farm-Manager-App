import { DynamicModule, Module } from '@nestjs/common';
import { OrmModule } from '../orms/orm.module';
import { ServicesModule } from '../services/services.module';
import { usersExports, usersProviders } from './providers/UserProviders';

@Module({
  imports: [OrmModule, ServicesModule],
})
export class UseCasesProxyModule {
  static register(): DynamicModule {
    return {
      module: this,
      providers: [...usersProviders],
      exports: [...usersExports],
    };
  }
}

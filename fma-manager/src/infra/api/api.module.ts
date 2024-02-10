import { Module } from '@nestjs/common';
import { OrmModule } from '../orms/orm.module';
import { ServicesModule } from '../services/services.module';
import { UseCasesProxyModule } from '../useCaseProxy/useCasesProxy.module';
import { UsersController } from './controllers/UserController';

@Module({
  imports: [OrmModule, ServicesModule, UseCasesProxyModule.register()],
  controllers: [UsersController],
})
export class ApiModule {}

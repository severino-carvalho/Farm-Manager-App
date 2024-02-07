import { Module } from '@nestjs/common';
import { UsersController } from './infra/api/controllers/UserController';
import { ServicesModule } from './infra/services/services.module';
import { UseCasesProxyModule } from './infra/useCaseProxy/useCasesProxy.module';

@Module({
  imports: [ServicesModule, UseCasesProxyModule.register()],
  controllers: [UsersController],
})
export class AppModule {}

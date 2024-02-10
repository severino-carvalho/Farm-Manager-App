import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { validateEnvs } from './config/configModule/validate';
import { ApiModule } from './infra/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validate: validateEnvs,
    }),
    PassportModule,
    ApiModule,
  ],
})
export class AppModule {}

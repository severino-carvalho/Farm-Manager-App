import { Provider } from '@nestjs/common';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { ListUsersUseCase } from 'src/core/useCases/Users/ListUsersUseCase';
import { UsersRepository } from 'src/infra/orms/typeorm/UsersRepository';
import { UserUseCasesEnum } from 'src/shared/Enums/UseCases/UserUseCasesEnum';

export const usersExports: string[] = Object.values(UserUseCasesEnum);

export const usersProviders: Provider[] = [
  {
    provide: UserUseCasesEnum.LIST_USER,
    inject: [UsersRepository],
    useFactory: (usersRepository: IUsersRepository) =>
      new ListUsersUseCase(usersRepository),
  },
];

import { Provider } from '@nestjs/common';
import { IUsersRepository } from 'src/core/repositories/repositories/IUsersRepository';
import { CreateUserUseCase } from 'src/core/useCases/Users/CreateUserUseCase';
import { DeleteUserUseCase } from 'src/core/useCases/Users/DeleteUserUseCase';
import { ListUsersUseCase } from 'src/core/useCases/Users/ListUsersUseCase';
import { UpdateUserUseCase } from 'src/core/useCases/Users/UpdateUserUseCase';
import { UsersRepository } from 'src/infra/orms/typeorm/repositories/UsersRepository';
import { UserUseCasesEnum } from 'src/shared/Enums/UseCases/UserUseCasesEnum';

export const usersExports: string[] = Object.values(UserUseCasesEnum);

export const usersProviders: Provider[] = [
  {
    provide: UserUseCasesEnum.LIST_USER,
    inject: [UsersRepository],
    useFactory: (usersRepository: IUsersRepository) =>
      new ListUsersUseCase(usersRepository),
  },
  {
    provide: UserUseCasesEnum.CREATE_USER,
    inject: [UsersRepository],
    useFactory: (usersRepository: IUsersRepository) =>
      new CreateUserUseCase(usersRepository),
  },
  {
    provide: UserUseCasesEnum.UPDATE_USER,
    inject: [UsersRepository],
    useFactory: (usersRepository: IUsersRepository) =>
      new UpdateUserUseCase(usersRepository),
  },
  {
    provide: UserUseCasesEnum.DELETE_USER,
    inject: [UsersRepository],
    useFactory: (usersRepository: IUsersRepository) =>
      new DeleteUserUseCase(usersRepository),
  },
];

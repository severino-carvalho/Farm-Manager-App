import { Controller, Get, Inject } from '@nestjs/common';
import { User } from 'src/core/entities/entities/User';
import { ListUsersUseCase } from 'src/core/useCases/Users/ListUsersUseCase';
import { UserUseCasesEnum } from 'src/shared/Enums/UseCases/UserUseCasesEnum';

@Controller('v1/users')
export class UsersController {
  constructor(
    @Inject(UserUseCasesEnum.LIST_USER)
    private readonly listUsersUseCase: ListUsersUseCase,
  ) {}

  @Get()
  async ListUsers(): Promise<User[]> {
    return await this.listUsersUseCase.execute();
  }
}

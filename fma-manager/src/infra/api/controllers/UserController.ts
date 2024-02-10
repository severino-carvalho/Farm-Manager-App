import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/UserDto/CreateUserDto';
import { UpdateUserDto } from 'src/core/dtos/UserDto/UpdateUserDto';
import { User } from 'src/core/entities/entities/User';
import { CreateUserUseCase } from 'src/core/useCases/Users/CreateUserUseCase';
import { DeleteUserUseCase } from 'src/core/useCases/Users/DeleteUserUseCase';
import { ListUsersUseCase } from 'src/core/useCases/Users/ListUsersUseCase';
import { UpdateUserUseCase } from 'src/core/useCases/Users/UpdateUserUseCase';
import { UserOrm } from 'src/infra/orms/entities/entities/UserOrm';
import { UserUseCasesEnum } from 'src/shared/Enums/UseCases/UserUseCasesEnum';

@Controller('v1/users')
@UsePipes(new ValidationPipe())
export class UsersController {
  constructor(
    @Inject(UserUseCasesEnum.LIST_USER)
    private readonly listUsersUseCase: ListUsersUseCase,

    @Inject(UserUseCasesEnum.CREATE_USER)
    private readonly createUseUseCase: CreateUserUseCase,

    @Inject(UserUseCasesEnum.UPDATE_USER)
    private readonly updateUseUseCase: UpdateUserUseCase,

    @Inject(UserUseCasesEnum.DELETE_USER)
    private readonly deleteUseUseCase: DeleteUserUseCase,
  ) {}

  @Get()
  async ListUsers(): Promise<User[]> {
    return await this.listUsersUseCase.execute();
  }

  @Post()
  async createUser(@Body() userData: CreateUserDto): Promise<User> {
    return await this.createUseUseCase.execute(userData);
  }

  @Put(':id')
  async updateUser(
    @Body() userData: UpdateUserDto,
    @Param('id') userId: string,
  ): Promise<User> {
    return await this.updateUseUseCase.execute(userId, userData);
  }

  @Delete(':id')
  async deleteUser(@Param() userId: string): Promise<UserOrm> {
    return await this.deleteUseUseCase.execute(userId);
  }
}

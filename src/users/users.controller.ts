import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { CreateUserDTO } from './dto/createUser.dto';
  import { UpdateUserDTO } from './dto/updateUser.dto';
  
  @Controller('users')
  export class UsersController {
    //injeção de dependência
    constructor(private readonly usersService: UsersService) {}
  
    //criar
    @Post()
    async createUser(@Body() req: CreateUserDTO): Promise<string> {
      return this.usersService.createUser(req);
    }
    //listar todos  localhost:3000/users
    @Get()
    async findAll() {
      return this.usersService.findAll();
    }
    //listar um localhost:3000/users/1
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.usersService.findOne(id);
    }
    //atualizar localhost:3000/users/1
    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: UpdateUserDTO) {
      return this.usersService.update(id, req);
    }
    //deletar
  }
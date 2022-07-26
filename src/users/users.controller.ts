import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user): Promise<Users> {
    return this.usersService.create(user);
  }

  @Get(':id')
  findOne(@Param() id: string): Promise<Users> {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param() id: string): Promise<void> {
    await this.usersService.remove(id);
  }
}
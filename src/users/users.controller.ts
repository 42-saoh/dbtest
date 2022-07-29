import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Users } from './users.entity';
import { Stat } from './stat.entity';
import { Block } from './block.entity';
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
  async findOne(@Param('id') id : number): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Get(':id/stat')
  async findStat(@Param('id') id: number): Promise<Stat> {
    return this.usersService.findStat(id);
  }

  @Get(':id/block')
  async findBlock(@Param('id') id: number): Promise<Block[]> {
    return this.usersService.findBlock(id);
  }

  @Post(':id/block')
  async idBlock(@Param('id') id: number, @Body('id') blockid: number): Promise<Users> {
    return this.usersService.idBlock(id, blockid);
  }

  @Delete(':id')
  async remove(@Param() id: string): Promise<void> {
    await this.usersService.remove(id);
  }
}
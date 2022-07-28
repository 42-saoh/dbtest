import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Stat } from './stat.entity';
import { StatService } from './stat.service';
import { BlockService } from './block.service';
import { Block } from './block.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Stat, Block])],
  providers: [UsersService, StatService, BlockService],
  controllers: [UsersController],
})

export class UsersModule {}

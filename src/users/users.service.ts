import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { Stat } from './stat.entity';
import { Block } from './block.entity';
import { BlockService } from './block.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private readonly blockService: BlockService,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
  
  async create(user : Users): Promise<Users> {
    let stat = new Stat();
    user.stat = stat;
    let user_save = await this.usersRepository.save(user);
    let block = new Block();
    block.id = user_save.id;
    this.blockService.create(block);
    return user_save;
  }

  async findOne(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({id : id});
  }

  async findStat(id : number) : Promise<Stat> {
    let user = await this.usersRepository.findOne({ where: {id:id}, relations: ["stat"] });
    return user.stat;
  }

  async idBlock(userid: number, blockid: number): Promise<Users> {
    let block = await this.blockService.findOne(blockid);
    let user = await this.usersRepository.findOne({ where: {id:userid}, relations: ["blocks"] });
    user.blocks.push(block);
    return this.usersRepository.save(user);
  }

  async findBlock(id : number) : Promise<Block[]> {
    return (await this.usersRepository.findOne({ where: {id:id}, relations: ["blocks"] })).blocks;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
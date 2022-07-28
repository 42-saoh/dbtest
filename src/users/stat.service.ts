import { Injectable } from '@nestjs/common';
import { Stat } from './stat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatService {
	constructor(
		@InjectRepository(Stat)
		private statRepository: Repository<Stat>,
	) {}

	findAll(): Promise<Stat[]> {
		return this.statRepository.find();
	}

	async create(stat: Stat): Promise<Stat> {
		return this.statRepository.save(stat);
	}

	async findOne(id: number): Promise<Stat> {
		return this.statRepository.findOneBy({id});
	}
	
}

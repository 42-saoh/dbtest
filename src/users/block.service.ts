import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Block } from './block.entity';

@Injectable()
export class BlockService {
	constructor(
		@InjectRepository(Block)
		private blockRepository: Repository<Block>,
	) {}

	findAll(): Promise<Block[]> {
		return this.blockRepository.find();
	}

	async create(block: Block): Promise<Block> {
		return this.blockRepository.save(block);
	}

	async update(block: Block): Promise<Block> {
		return this.blockRepository.save(block);
	}

	async findOne(id: number): Promise<Block> {
		return this.blockRepository.findOneBy({id});
	}	
}

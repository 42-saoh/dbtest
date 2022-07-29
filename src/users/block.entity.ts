import { Entity, PrimaryColumn, ManyToMany} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Block {
  @PrimaryColumn()
  id: number;

  @ManyToMany(() => Users, users => users.blocks, { nullable: true })
  users: Users[];

}
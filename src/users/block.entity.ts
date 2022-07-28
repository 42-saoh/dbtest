import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Block {
  @PrimaryColumn()
  id: number;

  @ManyToOne((type) => Users, (users) => users.blocks)
  users: Users;
}
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Stat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  win: number;

  @Column({ default: 0 })
  lose: number;

  @Column({ default: 0 })
  rating: number;

  @OneToOne(() => Users, (users) => users.stat)
  users: Users;
}
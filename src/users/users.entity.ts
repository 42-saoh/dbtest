import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Stat } from './stat.entity';
import { Block } from './block.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Stat, { cascade: true })
  @JoinColumn()
  stat: Stat;

  @OneToMany((type) => Block, (blocks) => blocks.users)
  blocks: Block[];
}
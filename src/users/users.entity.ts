import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
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

  @OneToOne(() => Stat, (stat) => stat.users, { cascade: true })
  @JoinColumn()
  stat: Stat;

  @ManyToMany(() => Block, blocks => blocks.users, { cascade: true, nullable: true })
  @JoinTable()
  blocks: Block[];
}
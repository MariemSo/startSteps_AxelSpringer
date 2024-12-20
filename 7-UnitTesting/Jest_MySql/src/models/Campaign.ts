import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  budget: number;

  @Column()
  status: string;
}

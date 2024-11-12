import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  ADVERTISER = "advertiser",
  PUBLISHER = "publisher",
  ADMIN = "admin",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.ADVERTISER,
  })
  role: UserRole;
}

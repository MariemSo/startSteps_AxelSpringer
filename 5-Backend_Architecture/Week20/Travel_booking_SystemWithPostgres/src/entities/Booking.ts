import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Flight } from "../entities/Flights.js";
import { User } from "../entities/Users.js";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  booking_id!: number;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Flight)
  flight!: Flight;

  @Column()
  booking_date!: string;
}

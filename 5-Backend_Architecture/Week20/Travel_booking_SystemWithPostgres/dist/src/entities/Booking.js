var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Flight } from "../entities/Flights.js";
import { User } from "../entities/Users.js";
let Booking = class Booking {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Booking.prototype, "booking_id", void 0);
__decorate([
    ManyToOne(() => User),
    __metadata("design:type", User)
], Booking.prototype, "user", void 0);
__decorate([
    ManyToOne(() => Flight),
    __metadata("design:type", Flight)
], Booking.prototype, "flight", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Booking.prototype, "booking_date", void 0);
Booking = __decorate([
    Entity()
], Booking);
export { Booking };

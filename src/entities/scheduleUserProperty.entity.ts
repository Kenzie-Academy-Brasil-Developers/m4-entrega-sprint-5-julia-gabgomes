import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Property from "./property.entity";
import User from "./user.entity";

@Entity("schedules_users_properties")
class ScheduleUserToProperty {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("date")
  date: string;

  @Column("time")
  hour: string;

  @ManyToOne(() => Property, (property) => property.schedules)
  property: Property;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}

export default ScheduleUserToProperty;

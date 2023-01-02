import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Address from "./address.entity";
import Category from "./category.entity";
import ScheduleUserToProperty from "./scheduleUserProperty.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.property)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (category) => category.property)
  @JoinColumn()
  category: Category;

  @OneToMany(() => ScheduleUserToProperty, (schedules) => schedules.property)
  schedules: ScheduleUserToProperty[];
}

export default Property;

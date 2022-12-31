import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Property from "./property.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column()
  zipCode: string;

  @Column({ nullable: true })
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToOne(() => Property, (property) => property.address)
  property: Property;
}

export default Address;

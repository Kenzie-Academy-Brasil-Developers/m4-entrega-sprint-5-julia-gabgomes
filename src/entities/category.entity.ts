import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import Property from "./property.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Property, (property) => property.category)
  property: Property[];

  @BeforeInsert()
  @BeforeUpdate()
  convertToLowerCase() {
    this.name = this.name.toLowerCase();
  }
}

export default Category;

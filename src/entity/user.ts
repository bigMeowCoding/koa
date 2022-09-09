import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn() // @ts-ignore
  id!: string;

  @Column() // @ts-ignore
  name!: string;

}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

  @PrimaryGeneratedColumn() // @ts-ignore
  id!: number;

  @Column() // @ts-ignore
  name!: string
}

import { Table, Column, DataType, HasMany } from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Post } from "./Post";

@Table({
  timestamps: false,
  tableName: "category",
})
export class Category extends BaseModel {
  @Column({ type: DataType.STRING })
  public name!: string;

  @HasMany(() => Post)
  public posts!: Post[];
}

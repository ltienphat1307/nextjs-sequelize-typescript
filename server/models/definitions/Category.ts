import { Table, Column, DataType, HasMany } from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Post } from "./Post";

@Table({
  timestamps: true,
  tableName: "category",
})
export class Category extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false })
  public name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public slug!: string;

  /* Associantions */
  @HasMany(() => Post)
  public posts!: Post[];
  /* End Associantions */
}

import { Table, Column, DataType } from "sequelize-typescript";
import { BaseModel } from "./BaseModel";

@Table({
  timestamps: false,
  tableName: "tag",
})
export class Tag extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false })
  public name!: string;
}

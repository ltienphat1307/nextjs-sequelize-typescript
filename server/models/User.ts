import {
  Table,
  Column,
  Model,
  DataType,
  Sequelize,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "user",
})
export class User extends Model {
  @Column({ type: DataType.STRING })
  public name!: string;

  @Column({
    type: DataType.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  public createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  public updatedAt!: Date;
}

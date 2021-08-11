import { Column, Model, DataType, Sequelize } from "sequelize-typescript";

export class BaseModel extends Model {
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

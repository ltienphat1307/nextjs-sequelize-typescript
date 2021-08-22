import {
  Table,
  Column,
  DataType,
  AllowNull,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { User } from "./User";
import { PostTagAssociation } from "./PostTagAssociation";
import { Category } from "./Category";

@Table({
  timestamps: true,
  tableName: "post",
})
export class Post extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false })
  public title!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public slug!: string;

  @AllowNull
  @Column({ type: DataType.STRING })
  public featureImage?: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public excerpt!: string;

  @Column({ type: DataType.TINYINT, defaultValue: false, allowNull: false })
  public featured!: boolean;

  @AllowNull
  @Column({ type: DataType.DATE })
  public publishedDate?: Date;

  @Column({ type: DataType.TEXT, allowNull: false })
  public content!: string;

  /* Associantions */
  // Author
  @BelongsTo(() => User)
  public author!: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public authorId!: number;
  // End Author

  // Category
  @BelongsTo(() => Category)
  public category!: Category;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public categoryId!: number;
  // End Category

  @HasMany(() => PostTagAssociation)
  public postTagAssociations?: PostTagAssociation[];
  /* End Associantions */
}

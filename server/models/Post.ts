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
  timestamps: false,
  tableName: "post",
})
export class Post extends BaseModel {
  @Column({ type: DataType.STRING })
  public title!: string;

  @Column({ type: DataType.STRING })
  public slug!: string;

  @AllowNull
  @Column({ type: DataType.STRING })
  public featureImage?: string;

  @Column({ type: DataType.STRING })
  public excerpt!: string;

  @Column({ type: DataType.TINYINT, defaultValue: false })
  public featured!: boolean;

  @AllowNull
  @Column({ type: DataType.DATE })
  public publishedDate?: Date;

  @Column({ type: DataType.TEXT })
  public content!: string;

  /** Author */
  @BelongsTo(() => User)
  public author!: User;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public authorId!: number;
  /** End Author */

  /** Category */
  @BelongsTo(() => Category)
  public category!: Category;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  public categoryId!: number;
  /** End Category */

  @HasMany(() => PostTagAssociation)
  public postTagAssociations!: PostTagAssociation[];
}

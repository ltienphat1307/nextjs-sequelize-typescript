import {
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  DataType,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import { Post } from "./Post";
import { Tag } from "./Tag";

@Table({
  timestamps: false,
  tableName: "post_tag_association",
})
export class PostTagAssociation extends BaseModel {
  @BelongsTo(() => Post)
  public post!: Post;

  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  public postId!: number;

  @BelongsTo(() => Tag)
  public tag!: Tag;

  @ForeignKey(() => Tag)
  @Column(DataType.INTEGER)
  public tagId!: number;
}

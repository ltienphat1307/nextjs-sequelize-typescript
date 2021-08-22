import { FindOptions } from "sequelize";
import { Post } from "../models";

export class PostRepository extends Post {
  public static async findAllRaw(options?: FindOptions) {
    const data = await Post.findAll(options);
    const rawData = data.map((d) => ({
      ...d.toJSON(),
      createdAt: d.createdAt.toString(),
      updatedAt: d.updatedAt.toString(),
    }));

    return rawData;
  }

  public static async findOneRaw(options?: FindOptions): Promise<any> {
    const data = await Post.findOne(options);

    if (!data) {
      throw Error("Not Found");
    }

    const rawData = {
      ...data.toJSON(),
      createdAt: data.createdAt.toString(),
      updatedAt: data.updatedAt.toString(),
    };

    return rawData;
  }
}

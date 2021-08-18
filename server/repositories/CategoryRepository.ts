import { FindOptions } from "sequelize";
import { Category } from "../models";

export class CategoryRepository extends Category {
  public static async findAllRaw(options?: FindOptions) {
    options = options || {};
    options.raw = true;

    const data = await Category.findAll(options);
    const rawData = data.map((d) => ({
      ...d,
      createdAt: d.createdAt.toString(),
      updatedAt: d.updatedAt.toString(),
    }));

    return rawData;
  }
}

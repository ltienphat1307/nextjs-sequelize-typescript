// import { FindOptions } from "sequelize";
import { User } from "../models";
// import { BaseRepository } from "./BaseRepository";

export class UserRepository extends User {
  // public async findAllRaw(options?: FindOptions) {
  //   options = options || {};
  //   options.raw = true;
  //   const data = await User.findAll(options);
  //   const rawData = data.map((d) => ({
  //     ...d,
  //     createdAt: d.createdAt.toString(),
  //     updatedAt: d.updatedAt.toString(),
  //   }));
  //   return rawData;
  // }
}

// import { FindOptions } from "sequelize";
// import { Model } from "sequelize-typescript";
// // import { BaseModel } from "../models/definitions/BaseModel";

// export class BaseRepository extends Model {
//   // instanceMethod(input: T) : T
//   // {
//   //     return input;
//   // }

//   public static async findAllRaw(options?: FindOptions) {
//     options = options || {};
//     options.raw = true;

//     const data: any[] = await BaseRepository.findAll(options);

//     const rawData = data.map((d) => ({
//       ...d,
//       createdAt: d.createdAt.toString(),
//       updatedAt: d.updatedAt.toString(),
//     }));

//     return rawData;
//   }
// }

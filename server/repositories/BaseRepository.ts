// // import { FindOptions } from "sequelize-typescript";
// import { FindOptions } from "sequelize";
// import { BaseModel } from "../models/definitions/BaseModel";

// export class BaseRepository extends <T> {
//   // constructor(protected model: typeof BaseModel) {
//   // }

//   public async findAllRaw(options?: FindOptions) {
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

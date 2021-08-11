import { Sequelize } from "sequelize-typescript";

import { User } from "./User";

const sequelize = new Sequelize({
  database: "code3x_v2",
  dialect: "mysql",
  username: "root",
  password: "root",
  models: [__dirname + "/models/User"],
});

sequelize.addModels([User]);

export default sequelize;

export { User };

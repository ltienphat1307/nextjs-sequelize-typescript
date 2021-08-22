import { Sequelize } from "sequelize-typescript";

import { User } from "./definitions/User";
import { Post } from "./definitions/Post";
import { Tag } from "./definitions/Tag";
import { PostTagAssociation } from "./definitions/PostTagAssociation";
import { Category } from "./definitions/Category";
import config from "../config";

const sequelize = new Sequelize({
  host: config.DATABASE_HOST,
  database: config.DATABASE_NAME,
  dialect: "mysql",
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
});

sequelize.addModels([User, Category, Post, Tag, PostTagAssociation]);

export { User, Post, Tag, PostTagAssociation, Category };

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  await User.findOrCreate({
    where: { email: "admin@example.com" },
    defaults: { name: "admin", email: "admin@example.com" },
  });
};

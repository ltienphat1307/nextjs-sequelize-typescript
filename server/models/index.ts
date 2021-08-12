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

export default sequelize;
export { User, Post, Tag, PostTagAssociation, Category };

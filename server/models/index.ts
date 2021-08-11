import { Sequelize } from "sequelize-typescript";

import { User } from "./User";
import { Post } from "./Post";
import { Tag } from "./Tag";
import { PostTagAssociation } from "./PostTagAssociation";
import { Category } from "./Category";
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

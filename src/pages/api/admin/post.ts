import { NextApiRequest, NextApiResponse } from "next";
import { PostRepository, UserRepository } from "@server/repositories";
import { Post } from "@server/models";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data: Post = JSON.parse(req.body);
  const user = await UserRepository.findOne({
    where: { email: "admin@example.com" },
  });

  if (!user) {
    return res.status(500).send("Missing User");
  }

  data.authorId = user.id;
  const category = await PostRepository.create(data);

  return res.status(200).json(category.toJSON());
};

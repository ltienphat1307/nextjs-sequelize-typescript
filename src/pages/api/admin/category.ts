import { NextApiRequest, NextApiResponse } from "next";
import { CategoryRepository } from "@server/repositories";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = JSON.parse(req.body);

  const category = await CategoryRepository.create({
    name: data.name,
    slug: data.slug,
  });

  return res.status(200).json(category.toJSON());
};

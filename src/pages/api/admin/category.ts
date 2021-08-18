import { NextApiRequest, NextApiResponse } from "next";
// import nextConnect from "next-connect";

import { CategoryRepository } from "@server/repositories";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = JSON.parse(req.body);

  const category = await CategoryRepository.create({
    name: data.name,
    slug: data.slug,
  });

  return res.status(200).json(category.toJSON());
};

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "1mb",
//     },
//   },
// };

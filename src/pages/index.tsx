import React from "react";
import { NextPageContext } from "next";

import { CategoryHeader, PostCard } from "@src/components/Blogs";
import { UserRepository } from "@server/repositories";
import { User } from "@server/models";

export async function getServerSideProps({ locale }: NextPageContext) {
  console.log("locale", locale);

  const users = await UserRepository.findAllRaw();

  // Pass data to the page via props
  return { props: { users } };
}

interface HomeProps {
  user: User[];
}

export default function Home(_props: HomeProps) {
  console.log(_props);
  const cate = {
    name: "Test",
    desc: "my categories",
  };

  const posts = [
    {
      id: 1,
      title: "Post 1",
      slug: "post-1",
      featureImage: "src",
      excerpt:
        "Ghost has a powerful visual editor with familiar formatting options, as well as the ability to add dynamic content.",
      publishedDate: "28-09-21",
      author: {},
      content: "",
    },
  ];

  return (
    <div className="container">
      <CategoryHeader {...cate} />
      <section className="post-feed" onClick={() => alert("tét")}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </section>
    </div>
  );
}

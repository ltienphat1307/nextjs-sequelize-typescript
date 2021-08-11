import React from "react";

import { CategoryHeader, PostCard } from "@src/components/Blogs";
import { User } from "@server/models";

export async function getServerSideProps() {
  const users = await User.findAll({ raw: true });

  const _users = users.map((d) => ({
    ...d,
    createdAt: d.createdAt.toString(),
    updatedAt: d.updatedAt.toString(),
  }));

  // Pass data to the page via props
  return { props: { users: _users } };
}

export default function Home(props: any) {
  console.log(props);
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

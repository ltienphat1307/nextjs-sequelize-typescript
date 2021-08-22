import React from "react";

import { PostCard } from "@src/components/client/components/Blogs";
import { PostRepository } from "@server/repositories";
import { Post, User } from "@server/models";

interface PageProps {
  posts: Post[];
}

export async function getServerSideProps() {
  const posts = await PostRepository.findAllRaw({
    include: {
      model: User,
      required: true,
    },
  });

  return { props: { posts } };
}

export default function Home(props: PageProps) {
  const { posts } = props;

  return (
    <div className="container">
      <section className="post-feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

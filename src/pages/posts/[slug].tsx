import React from "react";
import { NextPageContext } from "next";

import { PostContent } from "@src/components/client/components/Blogs/PostContent";
import { PostRepository } from "@server/repositories";
import { Post } from "@server/models";

export async function getServerSideProps(nextPage: NextPageContext) {
  const slug = nextPage.query.slug as string;
  let post: Post;

  try {
    post = await PostRepository.findOneRaw({
      where: { slug },
    });

    return { props: { post } };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}

interface PageProps {
  post: Post;
}

export default function PostContentPage(props: PageProps) {
  return <PostContent post={props.post} />;
}

import React from "react";
import { Post } from "@server/models";

export const PostContent = ({ post }: { post: Post }) => {
  return (
    <div className="container">
      <article className="content">
        {post.featureImage ? (
          <figure className="post-feature-image">
            <img src={post.featureImage} alt={post.title} />
          </figure>
        ) : null}
        <section className="post-full-content">
          <h1 className="content-title">{post.title}</h1>

          {/* The main post content */}
          <section
            className="content-body load-external-scripts"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
      </article>
    </div>
  );
};

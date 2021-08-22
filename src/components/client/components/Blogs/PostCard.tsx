import React from "react";
import Link from "next/link";

import { Post } from "@server/models";
import { Tag } from "./Tag";

export const PostCard = ({ post }: { post: Post }) => {
  const url = `/posts/${post.slug}/`;

  return (
    <Link href={url}>
      <a className="post-card" style={{ width: 300 }}>
        <header className="post-card-header">
          <div
            className="post-card-image"
            style={{
              backgroundImage: `url("/images/post_default_image.png")`,
            }}
          ></div>
          {post.postTagAssociations && post.postTagAssociations.length && (
            <div className="post-card-tags">
              {post.postTagAssociations.map((postTagAssociation) => (
                <Tag key={postTagAssociation.id} tag={postTagAssociation.tag} />
              ))}
            </div>
          )}
          {!!post.featured && <span>Featured</span>}
          <h2 className="post-card-title">{post.title}</h2>
        </header>
        <section className="post-card-excerpt">{post.excerpt}</section>
        <footer className="post-card-footer">
          <div className="post-card-footer-left">
            <div className="post-card-avatar">
              <img
                className="default-avatar"
                src="/images/icons/avatar.svg"
                alt={post.author.name}
              />
            </div>
            <span>{post.author.name}</span>
          </div>
          <div className="post-card-footer-right">
            <div>{post.publishedDate ? post.publishedDate : ""}</div>
          </div>
        </footer>
      </a>
    </Link>
  );
};

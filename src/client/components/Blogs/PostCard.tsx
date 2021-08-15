import React from "react";
import Link from "next/link";

import { PostEntiy } from "src/types/entities";
import { Tag } from "./Tag";

export const PostCard = (post: PostEntiy) => {
  const url = `/${post.slug}/`;

  return (
    <Link href={url}>
      <a className="post-card">
        <header className="post-card-header">
          {post.featureImage && (
            <div
              className="post-card-image"
              style={{
                backgroundImage: `url(${post.featureImage})`,
              }}
            ></div>
          )}
          {post.tags && (
            <div className="post-card-tags">
              {post.tags.map((tag) => (
                <Tag key={tag.id} tag={tag} />
              ))}
            </div>
          )}
          {post.featured && <span>Featured</span>}
          <h2 className="post-card-title">{post.title}</h2>
        </header>
        <section className="post-card-excerpt">{post.excerpt}</section>
        <footer className="post-card-footer">
          <div className="post-card-footer-left">
            <div className="post-card-avatar">
              {post.author.profile_image ? (
                <img
                  className="author-profile-image"
                  src={post.author.profile_image}
                  alt={post.author.name}
                />
              ) : (
                <img
                  className="default-avatar"
                  src="/images/icons/avatar.svg"
                  alt={post.author.name}
                />
              )}
            </div>
            <span>{post.author.name}</span>
          </div>
          <div className="post-card-footer-right">
            <div>{post.publishedDate}</div>
          </div>
        </footer>
      </a>
    </Link>
  );
};

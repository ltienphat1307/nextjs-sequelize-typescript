import React from "react";

interface CategoryHeaderProps {
  name: string;
  desc?: string;
  image?: string;
  tags?: any[];
}

export const CategoryHeader = (cate: CategoryHeaderProps) => {
  return (
    <header className="author-header">
      <div className="author-header-content">
        <h1>{cate.name}</h1>
        {cate.desc && <p>{cate.desc}</p>}

        {cate.tags && cate.tags.length && (
          <div className="author-header-meta">
            {cate.tags.map((tag) => (
              <a
                className="author-header-item"
                href={tag.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                tag.label
              </a>
            ))}
          </div>
        )}
      </div>
      {cate.image && (
        <div className="author-header-image">
          <img src={cate.image} alt={cate.name} />
        </div>
      )}
    </header>
  );
};

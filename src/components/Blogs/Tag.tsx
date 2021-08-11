import React from "react";

import { TagEntity } from "src/types/entities";

interface TagProps {
  tag: TagEntity;
}

export const Tag = ({ tag }: TagProps) => {
  return <span>{tag.name}</span>;
};

import React from "react";

import { Tag as TagEntity } from "@server/models";

interface TagProps {
  tag: TagEntity;
}

export const Tag = ({ tag }: TagProps) => {
  return <span>{tag.name}</span>;
};

import React from "react";
import { StyledTags } from "./StyledTags";

type TagsProps = {
  score: number;
};

const Tags: React.FunctionComponent<TagsProps> = ({ score }) => {
  let color = "red";
  if (score >= 80) color = "green";
  else if (score >= 50 && score < 80) color = "orange";

  return <StyledTags color={color} />;
};

export default Tags;

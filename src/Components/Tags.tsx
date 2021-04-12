import React from "react";
import { StyledTags } from "../Style/StyledTags";

class Tags extends React.Component<{ score: number }> {
  render() {
    const { score } = this.props;
    let tag;
    switch (true) {
      case score >= 80:
        tag = <StyledTags color="green"></StyledTags>;
        break;
      case score >= 50 && score < 80:
        tag = <StyledTags color="orange"></StyledTags>;
        break;
      case score < 50:
        tag = <StyledTags color="red"></StyledTags>;
        break;
    }
    return tag;
  }
}

export default Tags;

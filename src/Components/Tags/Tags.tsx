import React from "react";
import { StyledTags } from "./StyledTags";

class Tags extends React.Component<{ score: number }> {
  render() {
    const { score } = this.props;
    let color: string = "";
    switch (true) {
      case score >= 80:
        color = "green";
        break;
      case score >= 50 && score < 80:
        color = "orange";
        break;
      case score < 50:
        color = "red";
        break;
    }
    return <StyledTags color={color}></StyledTags>;
  }
}

export default Tags;

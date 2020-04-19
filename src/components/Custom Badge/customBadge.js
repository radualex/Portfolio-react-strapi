import React from "react";
import { Badge } from "shards-react";

class CustomBadge extends Badge {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <Badge
        pill
        outline
        theme="info"
        style={{
          margin: "0 1px",
          "font-size": "9px"
        }}
      >
        {this.name}
      </Badge>
    );
  }
}

export default new CustomBadge;

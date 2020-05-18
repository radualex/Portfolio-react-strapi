import React from "react";
import "./index.scss";
import { useSiteMetadata } from "./api";

import { RadialMenu } from "../RadialMenu/radial";

export class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <RadialMenu />
      </div>
    );
  }
}

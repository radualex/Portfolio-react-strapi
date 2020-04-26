import React from "react";

import "./index.css";

import "semantic-ui-css/semantic.min.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Github } from "../components/Github";
import { Intro } from "../components/Intro";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    {/* <Github /> */}
  </Layout>
);

export default IndexPage;

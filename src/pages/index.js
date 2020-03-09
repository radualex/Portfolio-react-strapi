import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Github } from "../components/landing/github";
import { Intro } from "../components/landing/intro";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Github />
  </Layout>
);

export default IndexPage;

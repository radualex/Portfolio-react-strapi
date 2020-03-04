import React from "react";
// import { Link } from "gatsby";


import Layout from "../components/layout";
import SEO from "../components/seo";
import { Github } from "../components/landing/github"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Github />
  </Layout>
);

export default IndexPage;

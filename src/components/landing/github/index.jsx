import React from "react";

import { Wrapper } from "../../basics/Wrapper";
import { Grid } from "../../basics/Grid";
import { Card } from "../../basics/Card";
import { Content, ContentLanguages, ContentStats } from "../../basics/Content";
import { Badge } from "shards-react";

import { useStaticQuery, graphql } from "gatsby";

import commitIcon from "../../../assets/icons/commit.svg"

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export const Github = () => {
  const githubData = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 9
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  object(expression: "master") {
                    ... on GitHub_Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                  languages(first: 3) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
            repositoriesContributedTo(
              first: 9
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  object(expression: "master") {
                    ... on GitHub_Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                  languages(first: 3) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper id="projects">
      <Grid>
        {githubData.github.viewer.repositoriesContributedTo.edges.map(
          ({ node }) => (
            <Card
              key={node.id}
              as="a"
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "text-decoration": "none" }}
            >
              <Content>
                <h6>{node.name}</h6>
              </Content>
              <ContentStats>
                <div>
                  <img src={commitIcon} alt="commits" />
                  <span>{node.object.history.totalCount}</span>
                </div>
              </ContentStats>
              <ContentLanguages>
                {node.languages.nodes.map(({ name }) => (
                  <Badge
                    pill
                    outline
                    theme="info"
                    style={{
                      margin: "0 .5rem 0 0",
                      "font-size": "9px",
                      border: "1px solid #706c61",
                      color: "#706c61"
                    }}
                  >
                    {name}
                  </Badge>
                ))}
              </ContentLanguages>
            </Card>
          )
        )}
      </Grid>
    </Wrapper>
  );
};
//TODO: Move this styling to CustomBadge class and export it.
//TODO: Create a style for this Card
//TODO: get all items from repositoriesContributedTo and the rest up to 9 from the repositories (Aggregate???)

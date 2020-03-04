import React from "react";

import { Wrapper } from "../../basics/Wrapper";
import { Grid } from "../../basics/Grid";
import { Card } from "../../basics/Card";
import { Badge } from "shards-react";

import { useStaticQuery, graphql } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export const Github = () => {
  const githubData = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 30
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 30) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
            repositoriesContributedTo(
              first: 30
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 30) {
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
        {githubData.github.viewer.repositories.edges.map(({ node }) => (
          <Card>
            <h6>{node.name}</h6>

            {node.languages.nodes.map(({ name }) => (
              <Badge theme="dark" style={{'border-radius': '1rem', 'margin': '0 1px', 'font-size': '10px'}}>{name}</Badge>
            ))}
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};
//TODO: Move this styling to CustomBadge class and export it. 
//TODO: Create a style for this Card
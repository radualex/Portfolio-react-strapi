import React from "react";

import { Wrapper } from "../../basics/Wrapper";
import { Grid } from "../../basics/Grid";
import { Card } from "../../basics/Card";
import { Content, ContentLanguages, ContentStats } from "../../basics/Content";

import { Label } from "semantic-ui-react";

import { useStaticQuery, graphql } from "gatsby";

import commitIcon from "../../../assets/icons/commit.svg";
import prIcon from "../../../assets/icons/pullrequest.svg";

export const Github = () => {
  const githubData = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            topRepositories(
              first: 9
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  languages(first: 3) {
                    nodes {
                      name
                    }
                  }
                  object(expression: "master") {
                    ... on GitHub_Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                  pullRequests {
                    totalCount
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
        {githubData.github.viewer.topRepositories.edges.map(({ node }) => (
          <Card
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "text-decoration": "none", "color": "inherit", "text-transform": "capitalize" }}
          >
            <Content>
              <h6>{node.name}</h6>
            </Content>
            <ContentStats>
              <div>
                <img src={commitIcon} alt="commits" />
                <span>{node.object.history.totalCount}</span>
              </div>
              <div>
                <img src={prIcon} alt="pull-requests" />
                <span>{node.pullRequests.totalCount}</span>
              </div>
            </ContentStats>
            <ContentLanguages>
              {node.languages.nodes.map(({ name }) => (
                <Label size="small">
                  {name}
                </Label>
              ))}
            </ContentLanguages>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

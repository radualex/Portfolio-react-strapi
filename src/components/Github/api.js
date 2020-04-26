import { useStaticQuery, graphql } from "gatsby";

export const useGithubData = () => {
  const { github } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            topRepositories(
              first: 50
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  languages(first: 100) {
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
  return github.viewer.topRepositories.edges;
};

export function GetTopLanguages(itemsToReturn) {
  let languages = [];

  useGithubData()
    .map((edge) => edge.node.languages)
    .forEach((langArray) => {
      langArray.nodes.forEach(({ name }) => {
        let found = false;
        for (var i = 0; i < languages.length; i++) {
          if (languages[i].name === name) {
            languages[i].count++;
            found = true;
          }
        }
        if (!found) {
          languages.push({ name, count: 1 });
        }
      });
    });

  let sortedLanguages = languages.sort((a, b) => b.count - a.count);

  console.log(sortedLanguages.slice(0, itemsToReturn));
  return sortedLanguages.slice(0, itemsToReturn);
}

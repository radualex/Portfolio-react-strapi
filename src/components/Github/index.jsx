import React from "react";


export const Github = () => {
  return (
    <h1>Github page</h1>
    // <Wrapper id="projects">
    //   <Grid>
    //     {useGithubData().map(({ node }) => (
    //       <Card
    //         key={node.id}
    //         as="a"
    //         href={node.url}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Content>
    //           <h6>{node.name}</h6>
    //         </Content>
    //         <ContentStats>
    //           <div>
    //             <img src={commitIcon} alt="commits" />
    //             <span>{node.object.history.totalCount}</span>
    //           </div>
    //           <div>
    //             <img src={prIcon} alt="pull-requests" />
    //             <span>{node.pullRequests.totalCount}</span>
    //           </div>
    //         </ContentStats>
    //         <ContentLanguages>
    //           {node.languages.nodes.map(({ name }) => (
    //             <Label
    //               size="mini"
    //               style={{ background: "#151516", color: "#fff" }}
    //             >
    //               {name}
    //             </Label>
    //           ))}
    //         </ContentLanguages>
    //       </Card>
    //     ))}
    //   </Grid>
    // </Wrapper>
  );
};

// query MyQuery {
//     github {
//       viewer {
//         repositories(first: 30, orderBy: {field: STARGAZERS, direction: DESC}) {
//           edges {
//             node {
//               id
//               name
//               url
//               description
//               stargazers {
//                 totalCount
//               }
//               forkCount
//             }
//           }
//         }
//         repositoriesContributedTo(first: 30, orderBy: {field: STARGAZERS, direction: DESC}) {
//           edges {
//             node {
//               id
//               name
//               url
//               description
//               stargazers {
//                 totalCount
//               }
//               forkCount
//             }
//           }
//         }
//       }
//     }
//   }
  
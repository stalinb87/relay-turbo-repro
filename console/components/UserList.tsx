import { createPaginationContainer, graphql } from "react-relay";
const UserList = () => {};

export default createPaginationContainer(
  UserList,
  {
    query: graphql`
      fragment UserList_query on Query {
        users(first: 100) @connection(key: "UserList_users") {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.query?.users;
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query UserListPaginationQuery {
        ...UserList_query
      }
    `,
  },
);

"use client";
import { graphql } from "react-relay";
const query = graphql`
  query QueryRootQuery {
    name
  }
`;
export default function QueryRoot() {
  // Theoretically would useLazyLoadQuery(query), but
  // for minimal repo purposes leaving that out
  return JSON.stringify(query);
}

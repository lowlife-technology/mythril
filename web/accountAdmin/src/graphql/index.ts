import { ApolloClient, InMemoryCache } from "@apollo/client";

export const uri = "http://localhost:3000";

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

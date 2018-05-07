import ApolloClient from "apollo-boost";
import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  // cache: new InMemoryCache()
});


import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphqlClient = new ApolloClient({
  uri: 'https://senheng-gql.testingnow.me/graphql',
  cache: new InMemoryCache()
});

export default graphqlClient;

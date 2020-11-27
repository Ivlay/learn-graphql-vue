import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
    
});
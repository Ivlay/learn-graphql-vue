import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { apolloClient } from './ApolloClient';

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $query: {
            loadingKey: 'loading'
        },
        
    }
});

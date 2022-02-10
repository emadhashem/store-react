import {ApolloClient, InMemoryCache} from '@apollo/client'
const GQL_URL = 'http://localhost:4000/'
const client = new ApolloClient({
    uri : GQL_URL,
    cache : new InMemoryCache()
})

export default client
import { ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client'
const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}
const GQL_URL = 'http://localhost:4000/'
const client = new ApolloClient({
    uri: GQL_URL,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})

export default client
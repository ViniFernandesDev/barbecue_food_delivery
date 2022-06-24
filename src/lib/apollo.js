import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r7vv7d0pw701z3d4bm6557/master',
    cache: new InMemoryCache()
})
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ovqb2719lf01z46tgvc1k2/master",
    cache: new InMemoryCache(),
});

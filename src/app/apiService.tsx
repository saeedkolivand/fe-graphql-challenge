import { ApolloClient, InMemoryCache } from "@apollo/client";
import Config from "./config";

const HttpService = new ApolloClient({
  uri: Config.baseUrl,
  cache: new InMemoryCache(),
});

export default HttpService;

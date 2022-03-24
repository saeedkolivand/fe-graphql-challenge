import {
  createApolloErrorProvider,
  createApolloLoadingProvider,
  createApolloMockedProvider,
} from "apollo-mocked-provider";
import { apolloMockProvidersTypes } from "./apolloMockProviders.types";

export const ApolloMockedProvider = createApolloMockedProvider(
  apolloMockProvidersTypes
);
export const ApolloErrorProvider = createApolloErrorProvider();
export const ApolloLoadingProvider = createApolloLoadingProvider();

import { cleanup, render, screen } from "@testing-library/react";
import Home from "./Home";
import { initLoadingPortal } from "../../components/loading/loading.test";
import { ApolloLoadingProvider } from "../../app/apolloMock/apolloMockProviders";

const MockHomeLoading = () => {
  return (
    <ApolloLoadingProvider>
      <Home />
    </ApolloLoadingProvider>
  );
};

describe("Home test cases", () => {
  beforeEach(() => {
    initLoadingPortal();
  });
  afterEach(cleanup);

  it("should render loading and search", () => {
    render(<MockHomeLoading />);

    const searchBoxElement = screen.getByPlaceholderText(
      /search country code.../
    );
    const loadingElement = screen.getByLabelText("loading-wrapper");

    expect(searchBoxElement).toBeTruthy();
    expect(loadingElement).toBeTruthy();
  });
});

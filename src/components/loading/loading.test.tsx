import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Loading from "./Loading";

export const initLoadingPortal = () => {
  const div = document.createElement("div");
  const body = document.querySelector("body")!;
  div.setAttribute("id", "loading");
  body.appendChild(div);
};

describe("Loading test cases", () => {
  afterAll(cleanup);

  it("should render loading portal", () => {
    initLoadingPortal();

    render(<Loading />);

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement).toBeTruthy();
  });
});

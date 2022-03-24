import { render, screen } from "@testing-library/react";
import React from "react";
import Loading from "./Loading";

describe("Loading test cases", () => {
  it("should render loading portal", () => {
    const div = document.createElement("div");
    const body = document.querySelector("body")!;
    div.setAttribute("id", "loading");
    body.appendChild(div);
    render(<Loading />);

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement).toBeTruthy();
  });
});

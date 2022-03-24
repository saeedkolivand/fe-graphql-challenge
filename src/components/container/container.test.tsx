import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container test cases", () => {
  it("should render children", () => {
    const MockContainer = (props: { text: string }) => {
      const { text } = props;
      return (
        <Container>
          <p aria-label="container">{text}</p>
        </Container>
      );
    };

    render(<MockContainer text="text" />);
    const searchBoxElement = screen.getByText("text");
    expect(searchBoxElement).toBeTruthy();
  });

  it("should render loading on screen", () => {
    const div = document.createElement("div");
    const body = document.querySelector("body")!;
    div.setAttribute("id", "loading");
    body.appendChild(div);
    render(<Container showLoading />);

    const loadingElement = screen.getByLabelText("loading-wrapper");
    expect(loadingElement).toBeTruthy();
  });
});

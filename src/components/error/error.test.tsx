import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import Error from "./Error";

export const initErrorModalPortal = () => {
  const div = document.createElement("div");
  const body = document.querySelector("body")!;
  div.setAttribute("id", "error-modal");
  body.appendChild(div);
};

describe("Loading test cases", () => {
  afterAll(cleanup);

  it("should render loading portal", () => {
    initErrorModalPortal();

    const fetchDataFunction = jest.fn();

    render(
      <Error
        errorMessage="errorMessage"
        fetchDataFunction={fetchDataFunction}
      />
    );

    const errorElement = screen.getByLabelText("error-wrapper");
    const errorText = screen.getByText("errorMessage");

    expect(errorElement).toBeTruthy();
    expect(errorText).toBeTruthy();
  });
});

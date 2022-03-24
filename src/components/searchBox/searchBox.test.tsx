import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

const mockOnChange = jest.fn();

describe("SearchBox test cases", () => {
  it("should render SearchBox", () => {
    render(<SearchBox value="test" onChange={mockOnChange} />);
    const searchBoxElement = screen.getByLabelText("search-box-wrapper");
    expect(searchBoxElement).toBeTruthy();
  });

  it("should render SearchBox with 'test' in input placeholder", () => {
    render(
      <SearchBox
        searchPlaceholder="placeholder test"
        value="test"
        onChange={mockOnChange}
      />
    );
    const searchBoxElement = screen.getByPlaceholderText("placeholder test");
    expect(searchBoxElement).toBeTruthy();
  });
});

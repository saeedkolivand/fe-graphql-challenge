import { render, screen } from "@testing-library/react";
import { CountryObjectType } from "../../pages/home/home.types";
import Table from "./Table";

describe("Table component test cases", () => {
  it("should render Table on screen", () => {
    const tempTableData: CountryObjectType[] = [];

    render(<Table tableData={tempTableData} />);

    const tableElement = screen.getByLabelText("table-wrapper");
    expect(tableElement).toBeTruthy();
  });

  it("should render not found on screen", () => {
    const tempTableData: CountryObjectType[] = [];

    render(<Table tableData={tempTableData} />);

    const tableElement = screen.getByLabelText("not-found-wrapper");
    expect(tableElement).toBeTruthy();
  });

  it("should render table on screen with values", () => {
    const tempTableData: CountryObjectType[] = [
      {
        name: "Andorra",
        code: "AD",
      },
      {
        name: "United Arab Emirates",
        code: "AE",
      },
    ];

    render(<Table tableData={tempTableData} />);

    const tableElement = screen.getAllByLabelText("table-data");
    expect(tableElement.length).toBeGreaterThan(0);
  });
});

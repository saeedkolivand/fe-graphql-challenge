import React from "react";
import { TablePropsTypes } from "./table.types";
import "./table.styles.scss";
import { CountryObjectType } from "../../pages/home/home.types";
import NotFound from "../notFound/NotFound";

const Table: React.FC<TablePropsTypes> = (props) => {
  const { tableHeader, tableData } = props;

  const generateTableHeader = () => {
    if (tableHeader) {
      return tableHeader.map((item, index) => (
        <th key={`index-${index}`}>{item}</th>
      ));
    }
  };

  const generateTableBody = (data: CountryObjectType[]) => {
    return data.map((item, index) => (
      <tr key={`index-${index}`} aria-label="table-data">
        <td>{item.name}</td>
        <td>{item.code}</td>
      </tr>
    ));
  };

  return (
    <>
      <table className="table" aria-label="table-wrapper">
        <thead className="table__header">
          <tr>{generateTableHeader()}</tr>
        </thead>
        {tableData && tableData.length > 0 && (
          <tbody className="table__body">{generateTableBody(tableData)}</tbody>
        )}
      </table>
      {tableData && tableData.length === 0 && <NotFound />}
    </>
  );
};

export default Table;

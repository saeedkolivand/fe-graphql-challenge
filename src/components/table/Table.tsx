import React from "react";
import { Country } from "pages/home/home.types";
import { TablePropsTypes } from "./table.types";
import "./table.styles.scss";

const Table: React.FC<TablePropsTypes> = (props) => {
  const { tableHeader, tableData } = props;

  const generateTableHeader = () => {
    if (tableHeader) {
      return tableHeader.map((item, index) => (
        <th key={`index-${index}`}>{item}</th>
      ));
    }
  };

  const generateTableBody = (data: Country[]) => {
    if (data)
      return data.map((item, index) => (
        <tr key={`index-${index}`}>
          <td>{item.name}</td>
          <td>{item.code}</td>
        </tr>
      ));
  };

  return (
    <table className="table">
      <thead className="table__header">
        <tr>{generateTableHeader()}</tr>
      </thead>
      <tbody className="table__body">{generateTableBody(tableData)}</tbody>
    </table>
  );
};

export default Table;

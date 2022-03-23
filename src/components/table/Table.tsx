import React from "react";
import { TablePropsTypes } from "./table.types";
import "./table.styles.scss";

const Table: React.FC<TablePropsTypes> = (props) => {
  const { tableHeader, tableBody } = props;

  const generateTableHeader = () => {
    if (tableHeader) {
      return tableHeader.map((item, index) => (
        <th key={`index-${index}`}>{item}</th>
      ));
    }
  };

  return (
    <table className="table">
      <thead className="table__header">
        <tr>{generateTableHeader()}</tr>
      </thead>

      <tbody className="table__body">{tableBody}</tbody>
    </table>
  );
};

export default Table;

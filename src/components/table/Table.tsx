import React from "react";
import { TablePropsTypes } from "./table.types";

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
    <table>
      <thead>
        <tr>{generateTableHeader()}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Table;

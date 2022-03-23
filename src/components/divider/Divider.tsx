import React from "react";
import "./divider.style.scss";
import { DividerPropsTypes } from "./divider.types";

const Divider: React.FC<DividerPropsTypes> = (props) => {
  const { className = "" } = props;
  return <div {...props} className={`divider ${className}`} />;
};

export default Divider;

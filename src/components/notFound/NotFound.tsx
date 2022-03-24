import React from "react";
import "./notFound.style.scss";
import { NotFoundPropsTypes } from "./notFound.types";

const NotFound: React.FC<NotFoundPropsTypes> = (props) => {
  const { className = "", ...rest } = props;

  return (
    <div
      {...rest}
      className={`not-found ${className}`}
      aria-label="not-found-wrapper"
    >
      No Data :(
    </div>
  );
};

export default NotFound;

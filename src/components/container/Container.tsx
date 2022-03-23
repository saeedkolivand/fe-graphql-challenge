import React from "react";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const { children, className = "", loading } = props;

  return (
    <div {...props} className={`container ${className}`}>
      {loading && <Loading />}

      {children}
    </div>
  );
};

export default Container;

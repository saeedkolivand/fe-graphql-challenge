import React from "react";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const { children, className = "", showLoading = false, ...rest } = props;

  return (
    <div {...rest} className={`container ${className}`}>
      {showLoading && <Loading />}

      {children}
    </div>
  );
};

export default Container;

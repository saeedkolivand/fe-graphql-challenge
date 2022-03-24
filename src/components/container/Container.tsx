import React from "react";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";
import "./container.style.scss";
import Error from "../error/Error";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const {
    children,
    className = "",
    showLoading = false,
    showErrorMessage,
    errorRetryFunction,
    ...rest
  } = props;

  return (
    <div {...rest} className={`container ${className}`}>
      {showLoading && <Loading />}
      {showErrorMessage && errorRetryFunction && (
        <Error
          fetchDataFunction={errorRetryFunction}
          errorMessage={showErrorMessage}
        />
      )}

      {children}
    </div>
  );
};

export default Container;

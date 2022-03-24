import "./error.style.scss";
import ReactDOM from "react-dom";
import React from "react";
import { ErrorPropsTypes } from "./error.types";

const Error: React.FC<ErrorPropsTypes> = (props) => {
  const { fetchDataFunction, errorMessage = "" } = props;

  return ReactDOM.createPortal(
    <>
      <div className="error-wrapper__background" />
      <div className="error-wrapper absolute-center" aria-label="error-wrapper">
        <div className="error-wrapper__text">{errorMessage}</div>
        <button
          type="button"
          className="error-wrapper__retry-button"
          onClick={fetchDataFunction}
        >
          Retry
        </button>
      </div>
    </>,
    document.getElementById("error-modal")!
  );
};

export default Error;

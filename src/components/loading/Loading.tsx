import React from "react";
import ReactDOM from "react-dom";
import "./loading.style.scss";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="loading--wrapper" aria-label="loading-wrapper">
      <div className="loading--background" />
      <div className="loading--body absolute-center flex-center">
        <div className="loading--loader" />
      </div>
    </div>,
    document.getElementById("loading")!
  );
};

export default Loading;

import React from "react";

export interface ContainerPropsTypes extends React.HTMLProps<HTMLDivElement> {
  showLoading?: boolean;
  showErrorMessage?: string;
  errorRetryFunction?: () => void;
}

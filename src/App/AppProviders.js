import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

function AppProvider({ children }) {
  return <ErrorBoundary FallbackComponent={"error"}>{children}</ErrorBoundary>;
}

export { AppProvider };

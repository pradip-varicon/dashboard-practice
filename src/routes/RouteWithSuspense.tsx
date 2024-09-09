import SuspenseWrapper from "../components/SuspenseWrapper";
import { RouteObject } from "react-router-dom";

const createSuspenseRoute = (
  path: string,
  component: JSX.Element
): RouteObject => {
  return {
    path,
    element: <SuspenseWrapper>{component}</SuspenseWrapper>,
  };
};

export default createSuspenseRoute;

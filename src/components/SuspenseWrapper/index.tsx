import { Suspense } from "react";
import LoadingSpinner from "../LoadingSpinner";

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
};

export default SuspenseWrapper;

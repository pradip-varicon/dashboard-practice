import { StyledStack, StyledCircularProgress } from "./LoadingSpinnerStyles";

const LoadingSpinner = () => {
  return (
    <StyledStack direction="row">
      <StyledCircularProgress />
    </StyledStack>
  );
};

export default LoadingSpinner;

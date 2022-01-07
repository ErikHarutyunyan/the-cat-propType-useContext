import React from "react";
import { LoadingWrapper, Spinner } from "./Loading.styled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export { Loading };

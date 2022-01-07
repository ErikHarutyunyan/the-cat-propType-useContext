import React from "react";
import { useNavigate } from "react-router";
import { BackHome, Error } from "./NotFoundPage";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/", { replace: true });
  return (
    <>
      <Error>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <BackHome onClick={() => goHome()}>Back Home Page</BackHome>
      </Error>
    </>
  );
};

export { NotFoundPage };

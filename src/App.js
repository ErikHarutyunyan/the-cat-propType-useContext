import * as React from "react";
import { GlobalStyle } from "./theme/globalStyles";

import { index as Routes } from "./routes";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;

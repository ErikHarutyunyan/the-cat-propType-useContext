import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./theme/globalStyles";

import { Layout } from "./layout";

import { Home } from "./pages/Home/";
import { NotFoundPage } from "./pages/NotFoundPage/";

const Category = React.lazy(() => import("./pages/Category/"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="category/:name/:id"
            element={
              <React.Suspense
                fallback={
                  <div className="fallbackLoading">
                    <h3>Loading...</h3>
                  </div>
                }
              >
                <Category />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
}

export default App;

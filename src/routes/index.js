import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../layout";

import { Home } from "../pages/Home/";
import { NotFoundPage } from "../pages/NotFoundPage/";

const Category = React.lazy(() => import("../pages/Category/"));

export const index = () => {
  return (
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
  );
};

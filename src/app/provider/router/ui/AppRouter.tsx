import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import "./../../../styles/index.scss";

export const AppRouter = () => {
  return (
    <Suspense fallback={<>loading</>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrap">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

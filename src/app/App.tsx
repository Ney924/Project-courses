import "./styles/index.scss";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

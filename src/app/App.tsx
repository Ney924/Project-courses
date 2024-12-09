import "./styles/index.scss";

import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./provider/ThemeProvider";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;

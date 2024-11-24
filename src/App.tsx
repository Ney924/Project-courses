import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { Link } from "react-router-dom";
import { MainPageAsinc } from "./components/MainPage/MainPageAsinc";
import { AboutPageAsinc } from "./components/AboutPage/AboutPageAsinc";
import { useTheme } from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      hello world, bitch
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Routes>
        <Route path="/" element={<MainPageAsinc />} />
        <Route path="/about" element={<AboutPageAsinc />} />
      </Routes>
      <button onClick={toggleTheme}>theme</button>
    </div>
  );
};

export default App;

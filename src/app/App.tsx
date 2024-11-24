import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { Link } from "react-router-dom";

import { classNames } from "../shared/lib/classNames/classNames";
import { Suspense } from "react";
import { useTheme } from "./provider/ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      hello world, bitch
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<>loading</>}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<></>} />
        </Routes>
      </Suspense>
      ,<button onClick={toggleTheme}>theme</button>
    </div>
  );
};

export default App;

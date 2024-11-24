import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ThemeProvider from "./styles/theme/ThemeProvider";

render(
  <Suspense fallback={<>loading</>}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);

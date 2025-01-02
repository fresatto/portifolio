import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App";
import { theme } from "./theme";
import {
  ThemeProvider as MUIProvider,
  createTheme,
} from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const muiTheme = createTheme({});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MUIProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);

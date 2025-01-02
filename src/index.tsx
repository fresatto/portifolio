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

const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "red",
    },
  },
  typography: {
    fontFamily: '"Syne", serif',
    h3: {
      fontWeight: "bold",
      color: "#000",
      fontSize: 15,
      textTransform: "uppercase",
    },
    body1: {
      color: "#868a9b",
    },
  },
});

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

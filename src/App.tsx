import Sidebar from "./components/Sidebar";
import { Container, Content } from "./styles";

import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Initial from "./pages/Initial";
import About from "./pages/About";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Initial />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

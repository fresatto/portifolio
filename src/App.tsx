import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "./styles";
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

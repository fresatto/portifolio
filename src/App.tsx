import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Initial from "./pages/Initial";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { Container } from "./styles";
import ParticleBackground from "./components/Bg";

function App() {
  return (
    <Container className="App">
      <ParticleBackground />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Initial />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

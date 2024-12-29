import Sidebar from "./components/Sidebar";
import { Container, Content } from "./styles";

import { ThemeProvider } from "styled-components";

function App() {
  return (
    <Container className="App">
      <Content>
        <Sidebar />

        <section>
          <h1>Conteúdo principal</h1>
        </section>
      </Content>
    </Container>
  );
}

export default App;

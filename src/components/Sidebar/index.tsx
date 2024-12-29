import React from "react";

import { Container, Nav, SocialNetworks } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" />
      <Nav>
        <ul>
          <li>Inicío</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Portifolio</li>
          <li>Contato</li>
        </ul>
      </Nav>
      <SocialNetworks>
        <p>
          Copyright © 2024 by <strong>Marketify</strong>
          <br /> All rights are reserved
        </p>

        {/* TODO: Adicionar redes sociais */}
        <span>Redes Sociais</span>
      </SocialNetworks>
    </Container>
  );
};

export default Sidebar;

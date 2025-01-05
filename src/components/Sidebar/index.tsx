import React from "react";

import { Container, Nav, SocialNetworks, StyledNavLink } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container className="sidebar">
      <img src="https://i.pinimg.com/736x/3b/55/9f/3b559f613f431cb2680ada916e029a78.jpg" />
      <Nav>
        <ul>
          <StyledNavLink to="/">Inicío</StyledNavLink>
          <StyledNavLink to="/about">Sobre</StyledNavLink>
          <StyledNavLink to="/services">Serviços</StyledNavLink>
          <StyledNavLink to="/portfolio">Portfólio</StyledNavLink>
          <StyledNavLink to="/contact">Contato</StyledNavLink>
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

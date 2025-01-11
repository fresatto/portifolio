import React from "react";
import { menuItems } from "../../constants/nav";
import StyledNavLink from "../StyledNavLink";

import { Container, Nav, SocialNetworks } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container className="sidebar">
      <img src="https://i.pinimg.com/736x/3b/55/9f/3b559f613f431cb2680ada916e029a78.jpg" />
      <Nav>
        <ul>
          {menuItems.map(({ routeName, path }) => (
            <StyledNavLink key={routeName} to={path}>
              {routeName}
            </StyledNavLink>
          ))}
        </ul>
      </Nav>
      <SocialNetworks>
        {/* TODO: Adicionar redes sociais */}
        <span>Redes Sociais</span>
      </SocialNetworks>
    </Container>
  );
};

export default Sidebar;

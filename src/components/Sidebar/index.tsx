import React from "react";

import { menuItems } from "../../constants/nav";
import StyledNavLink from "../StyledNavLink";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <a href="https://www.linkedin.com/in/gabrielfresatto/" target="_blank">
          <LinkedInIcon fontSize="medium" />
        </a>
        <a href="https://www.instagram.com/fresatto_/" target="_blank">
          <InstagramIcon fontSize="medium" />
        </a>
      </SocialNetworks>
    </Container>
  );
};

export default Sidebar;

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import { menuItems } from "../../constants/nav";
import StyledNavLink from "../StyledNavLink";
import ProfilePic from "../../assets/profile.png";

import { Container, Nav, SocialNetworks } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container className="sidebar">
      <img src={ProfilePic} alt="Profile pic" />
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

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";

import { Container, DrawerContent, SocialNetworks } from "./styles";
import { menuItems } from "../../constants/nav";
import StyledNavLink from "../StyledNavLink";

import ProfilePic from "../../assets/profile.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <StyledNavLink to="/">
        <img src={ProfilePic} alt="Profile Pic" />
      </StyledNavLink>
      <button onClick={() => setOpened(true)}>
        <MenuIcon htmlColor="#000" fontSize="large" />
      </button>

      <Drawer open={opened} onClose={() => setOpened(false)}>
        <DrawerContent>
          {menuItems.map(({ routeName, path }) => (
            <StyledNavLink
              key={routeName}
              to={path}
              onClick={() => setOpened(false)}
            >
              {routeName}
            </StyledNavLink>
          ))}

          <SocialNetworks>
            <a
              href="https://www.linkedin.com/in/gabrielfresatto/"
              target="_blank"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="https://www.instagram.com/fresatto_/" target="_blank">
              <InstagramIcon fontSize="medium" />
            </a>
          </SocialNetworks>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Header;

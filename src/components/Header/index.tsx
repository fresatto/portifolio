import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";

import { Container, DrawerContent } from "./styles";
import { menuItems } from "../../constants/nav";
import StyledNavLink from "../StyledNavLink";

const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" />
      <button onClick={() => setOpened(true)}>
        <MenuIcon />
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
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Header;

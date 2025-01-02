import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" />
      <button>
        <MenuIcon />
      </button>
    </Container>
  );
};

export default Header;

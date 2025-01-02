import React from "react";
import Button from "@mui/material/Button";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" />
      <Button variant="contained">Hello world</Button>
    </Container>
  );
};

export default Header;

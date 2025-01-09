import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <Container>
      <span className="front">Botão Front</span>
      <span className="back">Botão Back</span>
    </Container>
  );
};

export default Button;

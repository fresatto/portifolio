import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { Container } from "./styles";

type AlertProps = {} & PropsWithChildren;

const Alert: React.FC<AlertProps> = ({ children }) => {
  return (
    <Container>
      <Typography color="#006b06">{children}</Typography>
    </Container>
  );
};

export default Alert;

import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { Container } from "./styles";

type AlertProps = {
  error?: boolean;
} & PropsWithChildren;

const Alert: React.FC<AlertProps> = ({ children, error = false }) => {
  return (
    <Container error={error}>
      <Typography color={error ? "#9a0505" : "#006b06"}>{children}</Typography>
    </Container>
  );
};

export default Alert;

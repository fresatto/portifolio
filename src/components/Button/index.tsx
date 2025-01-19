import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { Container } from "./styles";
import { CircularProgress } from "@mui/material";

export type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLMotionProps<"button">>;

const Button: React.FC<ButtonProps & PropsWithChildren> = (props) => {
  const { disabled, loading } = props;

  const buttonDisabled = loading || disabled;

  return (
    <Container
      initial="visible"
      {...props}
      loading={loading}
      disabled={buttonDisabled}
    >
      <motion.span>{props.children}</motion.span>
      {loading && <CircularProgress color="inherit" size={16} />}
    </Container>
  );
};

export default Button;

import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  Variants,
  motion,
} from "framer-motion";

import { Container } from "./styles";
import { CircularProgress } from "@mui/material";

export type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLMotionProps<"button">>;

const Button: React.FC<ButtonProps & PropsWithChildren> = (props) => {
  const { disabled, loading } = props;

  const frontMessageVariants: Variants = {
    hidden: {
      width: "35%",
      background: "#999",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    visible: {
      width: "100%",
      background: "#000",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const loadingVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const buttonDisabled = loading || disabled;

  return (
    <Container
      initial="visible"
      disabled={buttonDisabled}
      loading={loading}
      {...props}
    >
      <motion.span>{props.children}</motion.span>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={loadingVariants}
            style={{ display: "flex", alignItems: "center" }}
          >
            <CircularProgress color="inherit" size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Button;

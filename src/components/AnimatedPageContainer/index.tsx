import { Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";

import { Container } from "./styles";

const AnimatedPageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const entranceVariants: Variants = {
    hidden: {
      position: "relative",
      left: -10,
      opacity: 0,
    },
    visible: {
      left: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <Container
      variants={entranceVariants}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </Container>
  );
};

export default AnimatedPageContainer;

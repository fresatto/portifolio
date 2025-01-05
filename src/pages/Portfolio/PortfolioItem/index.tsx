import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

import {
  Overlay,
  OverlayTitle,
  OverlayTitleWrapper,
  Container,
} from "./styles";

type PortfolioItemProps = {
  bgImage: string;
  variants: Variants;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({ bgImage, variants }) => {
  const [hovered, setHovered] = useState(false);

  const overlayVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const titleWrapperVariants: Variants = {
    hidden: {
      position: "relative",
      top: -10,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.aside variants={variants}>
      <Container
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
        bgImage={bgImage}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <Overlay variants={overlayVariants}>
          <OverlayTitleWrapper variants={titleWrapperVariants}>
            <OverlayTitle>Azul Viagens</OverlayTitle>
          </OverlayTitleWrapper>
        </Overlay>
      </Container>
    </motion.aside>
  );
};

export default PortfolioItem;

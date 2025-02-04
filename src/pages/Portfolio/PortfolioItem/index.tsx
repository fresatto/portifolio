import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

import {
  Overlay,
  OverlayTitle,
  OverlayTitleWrapper,
  Container,
} from "./styles";
import { desktopMediaQuery, useMediaQuery } from "../../../hooks/useMediaQuery";

type PortfolioItemProps = {
  name: string;
  bgImage: string;
  variants: Variants;
  onClick: () => void;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  name,
  bgImage,
  variants,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  const isDesktop = useMediaQuery(desktopMediaQuery);

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

  const getContainerAnimatedProps = () => {
    if (isDesktop) {
      return {
        animate: hovered ? "visible" : "hidden",
        onHoverStart: () => setHovered(true),
        onHoverEnd: () => setHovered(false),
      };
    }

    return {
      animate: "visible",
    };
  };

  const containerAnimatedProps = getContainerAnimatedProps();

  return (
    <motion.aside variants={variants} onClick={onClick}>
      <Container initial="hidden" bgImage={bgImage} {...containerAnimatedProps}>
        <Overlay variants={overlayVariants}>
          <OverlayTitleWrapper variants={titleWrapperVariants}>
            <OverlayTitle>{name}</OverlayTitle>
          </OverlayTitleWrapper>
        </Overlay>
      </Container>
    </motion.aside>
  );
};

export default PortfolioItem;

import React from "react";

import InfoSection from "../../components/InfoSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import { Typography } from "@mui/material";
import {
  ContentContainer,
  FilterWrapper,
  Overlay,
  OverlayTitle,
  OverlayTitleWrapper,
  PortfolioItem,
  PortfolioItems,
} from "./styles";
import { Variants } from "framer-motion";

const Portfolio: React.FC = () => {
  const portfolioVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const titleWrapperVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <AnimatedPageContainer>
      <InfoSection title="Portifólio">
        <ContentContainer>
          <FilterWrapper>
            <Typography>All ● Vimeo ● Youtube</Typography>
          </FilterWrapper>

          <PortfolioItems>
            <PortfolioItem
              variants={portfolioVariants}
              initial="hidden"
              whileHover="visible"
              bgImage="https://i.pinimg.com/736x/46/95/ab/4695ab2e031f45be1a1a2f2dbe722826.jpg"
            >
              <Overlay variants={overlayVariants}>
                <OverlayTitleWrapper variants={titleWrapperVariants}>
                  {/* <OverlayTitle>Azul Viagens</OverlayTitle> */}
                </OverlayTitleWrapper>
              </Overlay>
            </PortfolioItem>
          </PortfolioItems>
        </ContentContainer>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Portfolio;

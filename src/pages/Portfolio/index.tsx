import React from "react";

import InfoSection from "../../components/InfoSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import { Typography } from "@mui/material";
import { ContentContainer, FilterWrapper, PortfolioItems } from "./styles";
import PortfolioItem from "./PortfolioItem";
import { Variants } from "framer-motion";

const Portfolio: React.FC = () => {
  const portfolioItemsWrapper: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const porfolioItemVariants: Variants = {
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              pariatur, laudantium dolorum debitis maxime perspiciatis sed esse
              quasi quo consequuntur cumque, labore impedit minima velit dolores
              delectus dolore illum quia!
            </Typography>
          </FilterWrapper>

          <PortfolioItems
            variants={portfolioItemsWrapper}
            initial="hidden"
            animate="visible"
          >
            <PortfolioItem
              variants={porfolioItemVariants}
              bgImage="https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg"
            />
            <PortfolioItem
              variants={porfolioItemVariants}
              bgImage="https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg"
            />
            <PortfolioItem
              variants={porfolioItemVariants}
              bgImage="https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg"
            />
            <PortfolioItem
              variants={porfolioItemVariants}
              bgImage="https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg"
            />
            <PortfolioItem
              variants={porfolioItemVariants}
              bgImage="https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg"
            />
            <PortfolioItem
              variants={porfolioItemVariants}
              bgImage="https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg"
            />
          </PortfolioItems>
        </ContentContainer>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Portfolio;

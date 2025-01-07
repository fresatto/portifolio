import React, { useState } from "react";

import InfoSection from "../../components/InfoSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import { Typography } from "@mui/material";
import { ContentContainer, FilterWrapper, PortfolioItems } from "./styles";
import PortfolioItem from "./PortfolioItem";
import { Variants } from "framer-motion";
import PortfolioItemModal from "./PortfolioItemModal";

export const projects = [
  {
    name: "Azul",
    bgImage:
      "https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg",
  },
  {
    name: "Hapvida",
    bgImage:
      "https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg",
  },
  {
    name: "NDI SP",
    bgImage:
      "https://i.pinimg.com/736x/78/52/6d/78526dbcdc8934f9fdebed6d5069549f.jpg",
  },
  {
    name: "Consultamais",
    bgImage:
      "https://i.pinimg.com/736x/07/7d/2e/077d2ef8979c89fab96d4c646005fa01.jpg",
  },
];

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

  const [portfolioItemModalOpened, setPortfolioItemModalOpened] =
    useState(false);

  const handleOnPortfolioItemClick = (itemId: string = "teste") => {
    setPortfolioItemModalOpened(true);
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
            {projects.map(({ bgImage, name }) => (
              <PortfolioItem
                key={bgImage}
                variants={porfolioItemVariants}
                bgImage={bgImage}
                name={name}
                onClick={handleOnPortfolioItemClick}
              />
            ))}
          </PortfolioItems>
        </ContentContainer>
      </InfoSection>

      <PortfolioItemModal
        open={portfolioItemModalOpened}
        onClose={() => setPortfolioItemModalOpened(false)}
      />
    </AnimatedPageContainer>
  );
};

export default Portfolio;

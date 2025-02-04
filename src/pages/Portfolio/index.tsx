import React, { useState } from "react";

import InfoSection from "../../components/InfoSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import { Typography } from "@mui/material";
import { ContentContainer, FilterWrapper, PortfolioItems } from "./styles";
import PortfolioItem from "./PortfolioItem";
import { Variants } from "framer-motion";
import PortfolioItemModal from "./PortfolioItemModal";
import { Project, ProjectId, projects } from "./projects";

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

  const [currentPortfolioId, setCurrentPortfolioId] = useState<ProjectId>();

  const handleOnPortfolioItemClick = (itemId: ProjectId) => {
    setCurrentPortfolioId(itemId);
    setPortfolioItemModalOpened(true);
  };

  const filteredProjects = projects.filter((p) => !p.disabled);

  return (
    <AnimatedPageContainer>
      <InfoSection title="Principais Projetos">
        <ContentContainer>
          <PortfolioItems
            variants={portfolioItemsWrapper}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(({ projectId, bgImage, name }) => (
              <PortfolioItem
                key={projectId}
                variants={porfolioItemVariants}
                bgImage={bgImage}
                name={name}
                onClick={() => handleOnPortfolioItemClick(projectId)}
              />
            ))}
          </PortfolioItems>
        </ContentContainer>
      </InfoSection>

      <PortfolioItemModal
        currentPortfolioId={currentPortfolioId}
        open={portfolioItemModalOpened}
        onClose={() => setPortfolioItemModalOpened(false)}
      />
    </AnimatedPageContainer>
  );
};

export default Portfolio;

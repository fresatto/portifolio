import React from "react";

import InfoSection from "../../components/InfoSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";
import { Typography } from "@mui/material";
import { ContentContainer, FilterWrapper, PortfolioItems } from "./styles";
import PortfolioItem from "./PortfolioItem";

const Portfolio: React.FC = () => {
  return (
    <AnimatedPageContainer>
      <InfoSection title="Portifólio">
        <ContentContainer>
          <FilterWrapper>
            <Typography>All ● Vimeo ● Youtube</Typography>
          </FilterWrapper>

          <PortfolioItems>
            <PortfolioItem bgImage="https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg" />
            <PortfolioItem bgImage="https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg" />
            <PortfolioItem bgImage="https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg" />
            <PortfolioItem bgImage="https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg" />
            <PortfolioItem bgImage="https://i.pinimg.com/736x/40/b8/c7/40b8c72612406b8350ae0520351e0887.jpg" />
            <PortfolioItem bgImage="https://i.pinimg.com/736x/e7/35/62/e7356280b7f86c2034a5cf32e9c554f9.jpg" />
          </PortfolioItems>
        </ContentContainer>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Portfolio;

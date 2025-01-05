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

const Portfolio: React.FC = () => {
  return (
    <AnimatedPageContainer>
      <InfoSection title="Portifólio">
        <ContentContainer>
          <FilterWrapper>
            <Typography>All ● Vimeo ● Youtube</Typography>
          </FilterWrapper>

          <PortfolioItems>
            <PortfolioItem bgImage="https://i.pinimg.com/736x/46/95/ab/4695ab2e031f45be1a1a2f2dbe722826.jpg">
              <Overlay>
                <OverlayTitleWrapper>
                  <OverlayTitle>Azul Viagens</OverlayTitle>
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

import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FilterWrapper = styled.div``;

export const PortfolioItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${(props) => props.theme.media.largeDesktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

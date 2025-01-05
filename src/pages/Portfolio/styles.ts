import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FilterWrapper = styled.div``;

export const PortfolioItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => props.theme.media.largeDesktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

type PortfolioItemProps = {
  bgImage: string;
};

export const PortfolioItem = styled(motion.div)<PortfolioItemProps>`
  position: relative;

  width: 100%;
  height: 400px;

  background-image: url(${(props) => props.bgImage});
  background-size: 100%;
  background-position: center;

  transition: background-size 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-size: 105%;
  }
`;

export const Overlay = styled(motion.div)`
  position: absolute;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayTitleWrapper = styled(motion.div)`
  background: #eee;
  width: fit-content;
  padding: 16px;
`;

export const OverlayTitle = styled(motion.h4)`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

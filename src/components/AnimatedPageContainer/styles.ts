import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 40px;

  ${(props) => props.theme.media.largeDesktop} {
    height: 100%;
    overflow: auto;
    padding-top: 15px;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

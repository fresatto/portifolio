import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
  z-index: 15;
`;

const sidesCss = css`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #000;
  z-index: 15;
`;

export const Left = styled(motion.div)`
  ${sidesCss};
  top: 0;
  left: 0;
`;

export const Line = styled(motion.div)`
  position: absolute;

  height: 50px;
  width: 1px;
  background: #fff;

  top: 50%;
  left: 50%;
  z-index: 20;
`;

export const Right = styled(motion.div)`
  ${sidesCss};
  top: 0;
  right: 0;
`;

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
`;

export const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

export const SkillName = styled(motion.div)`
  color: rgb(153, 153, 153);
`;

export const Percentage = styled(motion.div)`
  position: absolute;
  transform: translateX(-50%);

  color: rgb(153, 153, 153);
`;

export const ProgressWrapper = styled(motion.div)`
  height: 3px;
  position: relative;
  background: #e5e5e5;
  width: 100%;
`;

export const ProgressFill = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgb(153, 153, 153);
`;

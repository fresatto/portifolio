import { HTMLMotionProps, motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

export const SkillName = styled(motion.div)`
  color: ${(props) => props.theme.colors.text};
`;

export const Percentage = styled(motion.div)`
  position: absolute;
  transform: translateX(-50%);

  color: ${(props) => props.theme.colors.text};

  ${(props) => props.theme.media.largeDesktop} {
    transform: none;
  }
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

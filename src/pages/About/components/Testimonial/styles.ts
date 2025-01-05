import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  cursor: pointer;
`;

export const AuthorWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const AuthorTestimonial = styled(motion.p)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const AuthorImage = styled(motion.img)`
  object-fit: cover;
`;

export const AuthorTextWrapper = styled.div`
  overflow: hidden;
`;

export const AuthorStrongText = styled(motion.strong)`
  position: relative;

  font-size: 15px;
  font-weight: bold;
`;

export const AuthorRegularText = styled(motion.span)`
  position: relative;
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => props.theme.colors.text};
`;

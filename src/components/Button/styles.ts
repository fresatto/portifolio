import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Container = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  height: 36px;

  margin-top: 16px;
  position: relative;
  outline: 0;

  background-color: ${(props) => (props.disabled ? "#ccc" : "#000")};
  color: ${(props) => (props.disabled ? "#999" : "#fff")};
  transition: opacity 200ms;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: 0.8;
  }
`;

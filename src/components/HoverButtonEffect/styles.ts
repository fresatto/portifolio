import { motion } from "framer-motion";
import styled from "styled-components";
import { HoverButtonEffectProps } from ".";

export const Container = styled(motion.button)<HoverButtonEffectProps>`
  height: 36px;

  margin-top: 16px;
  padding: 0;
  position: relative;

  span {
    width: 100%;
    height: 100%;
    color: #000;
    display: inline-block;
    line-height: 36px;
    padding: 0 32px;
    font-size: 15px;
    white-space: nowrap;
  }

  .front {
    position: absolute;
    background: #999;
    color: #fff;
    left: 0;
    overflow: hidden;
  }
`;

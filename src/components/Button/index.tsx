import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";

import { Container } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLMotionProps<"button">>;

const Button: React.FC<ButtonProps & PropsWithChildren> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const frontMessageVariants: Variants = {
    hidden: {
      width: "35%",
      background: "#999",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    visible: {
      width: "100%",
      background: "#000",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const label = props.children;

  return (
    <Container
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
      whileTap="visible"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...props}
    >
      <motion.span variants={frontMessageVariants} className="front">
        {label}
      </motion.span>
      <span className="back">{label}</span>
    </Container>
  );
};

export default Button;

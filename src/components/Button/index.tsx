import React, { ButtonHTMLAttributes, useState } from "react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";

import { Container } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLMotionProps<"button">>;

const Button: React.FC<ButtonProps> = (props) => {
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
      background: "#555",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <Container
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...props}
    >
      <motion.span variants={frontMessageVariants} className="front">
        Enviar mensagem
      </motion.span>
      <span className="back">Enviar mensagem</span>
    </Container>
  );
};

export default Button;

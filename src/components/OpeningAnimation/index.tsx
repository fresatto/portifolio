import { useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";

import { Container, Left, Line, Right } from "./styles";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type OpeningAnimationProps = {
  onAnimationEnded: () => void;
};

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({
  onAnimationEnded,
}) => {
  const lineHeight = useMotionValue<number | string>("0%");
  const lineTop = useMotionValue("50%");
  const lineOpacity = useMotionValue(0);

  const leftWidth = useMotionValue("50%");
  const rightWidth = useMotionValue("50%");

  useEffect(() => {
    const timeout = setTimeout(async () => {
      animate(lineHeight, "5%");
      animate(lineOpacity, 1);

      await delay(1000);
      animate(lineHeight, "100%");
      animate(lineTop, "0%");
      animate(lineOpacity, 0.5).then(async () => {
        animate(leftWidth, "0%", {
          duration: 0.5,
          ease: "easeIn",
        });
        animate(rightWidth, "0%", {
          duration: 0.5,
          ease: "easeIn",
        });
        animate(lineOpacity, 0);

        onAnimationEnded();
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <Left style={{ width: leftWidth }} />
      <Line
        style={{ height: lineHeight, opacity: lineOpacity, top: lineTop }}
      />
      <Right style={{ width: rightWidth }} />
    </Container>
  );
};

export default OpeningAnimation;

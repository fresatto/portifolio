import { motion, Variants } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { Container } from "./styles";

const phrases = ["Desenvolvedor Front-End", "React JS", "React Native", "Next"];

const ExplosionCarousel = () => {
  const phrasesSeparatedByLetter = phrases.map((phrase) => phrase.split(""));

  const getRandomPosition = () => {
    const radius = 100;
    const angle = Math.random() * 2 * Math.PI; // Gera ângulo aleatório (0 a 360 graus)
    const x = radius * Math.cos(angle); // Posição X
    const y = radius * Math.sin(angle); // Posição Y
    return { x, y, left: x + "px", top: y + "px" };
  };

  const emotionElements = phrasesSeparatedByLetter.map((arr) => {
    const emotionLetter = arr.map((letter) => {
      const { left, top } = getRandomPosition();

      const letterVariant: Variants = {
        hidden: {
          opacity: 0,
          left,
          top,
        },
        visible: {
          opacity: 1,
          left: 0,
          top: 0,
          transition: {
            duration: 4,
            repeat: 2,
            repeatType: "reverse",
          },
        },
      };

      return {
        id: uuidv4(),
        letter,
        letterVariant,
      };
    });

    return { arrays: emotionLetter, id: uuidv4() };
  });

  return (
    <Container style={{ overflow: "visible" }}>
      {emotionElements.map(({ arrays, id }) => {
        return (
          <motion.p key={id} style={{ position: "relative" }}>
            {arrays.map(({ letter, letterVariant, id }) => (
              <motion.span
                key={id}
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                style={{ position: "relative" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
        );
      })}
    </Container>
  );
};

export default ExplosionCarousel;

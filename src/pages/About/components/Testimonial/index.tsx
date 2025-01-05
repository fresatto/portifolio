import React, { useEffect } from "react";
import { motion, useAnimate, Variants } from "framer-motion";
import { Typography } from "@mui/material";

import {
  Container,
  AuthorWrapper,
  AuthorTextWrapper,
  AuthorStrongText,
  AuthorRegularText,
} from "./styles";

const Testimonial: React.FC = () => {
  const [imageScope, imageAnimate] = useAnimate();

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const personNameVariants: Variants = {
    hidden: {
      bottom: "-10px",
      opacity: 0,
    },
    visible: {
      bottom: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  const occupationVariants: Variants = {
    hidden: {
      bottom: "-10px",
      opacity: 0,
    },
    visible: {
      bottom: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };

  return (
    <Container>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sed, quos
        odio, ullam debitis et molestiae expedita nemo, fugiat natus tenetur
        nobis. Exercitationem, beatae reiciendis accusantium quidem eligendi
        nulla debitis.
      </Typography>

      <AuthorWrapper>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          src="https://i.pinimg.com/736x/90/11/3f/90113f0ebe42224eb0c567a3f820f066.jpg"
        />
        <div>
          <AuthorTextWrapper>
            <AuthorStrongText
              initial="hidden"
              whileInView="visible"
              variants={personNameVariants}
            >
              Diogo Soares
            </AuthorStrongText>
          </AuthorTextWrapper>
          <AuthorTextWrapper>
            <AuthorRegularText
              initial="hidden"
              whileInView="visible"
              variants={occupationVariants}
            >
              Desenvolvedor Front-End
            </AuthorRegularText>
          </AuthorTextWrapper>
        </div>
      </AuthorWrapper>
    </Container>
  );
};

export default Testimonial;

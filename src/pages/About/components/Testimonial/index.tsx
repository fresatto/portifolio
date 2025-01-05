import React, { useEffect } from "react";
import { motion, useAnimate, Variants } from "framer-motion";
import { Typography } from "@mui/material";

import {
  Container,
  AuthorWrapper,
  AuthorTextWrapper,
  AuthorStrongText,
  AuthorRegularText,
  AuthorTestimonial,
} from "./styles";

const Testimonial: React.FC = () => {
  const testimonialVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.05,
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
        delay: 0.6,
      },
    },
  };

  return (
    <Container>
      <AuthorTestimonial
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={testimonialVariants}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sed, quos
        odio, ullam debitis et molestiae expedita nemo, fugiat natus tenetur
        nobis. Exercitationem, beatae reiciendis accusantium quidem eligendi
        nulla debitis.
      </AuthorTestimonial>

      <AuthorWrapper>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          src="https://i.pinimg.com/736x/3b/55/9f/3b559f613f431cb2680ada916e029a78.jpg"
        />
        <div>
          <AuthorTextWrapper>
            <AuthorStrongText
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={personNameVariants}
            >
              Diogo Soares
            </AuthorStrongText>
          </AuthorTextWrapper>
          <AuthorTextWrapper>
            <AuthorRegularText
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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

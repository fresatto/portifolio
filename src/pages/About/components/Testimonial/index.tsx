import React from "react";
import { motion } from "framer-motion";

import {
  Container,
  AuthorWrapper,
  AuthorTextWrapper,
  AuthorStrongText,
  AuthorRegularText,
  AuthorTestimonial,
} from "./styles";

import { useTestimonialAnimationsVariants } from "./useTestimonialAnimationsVariants";

type TestimonialProps = {
  blockContainerAnimation: boolean;
  onFirstContainerAnimationCompleted?: () => void;
};

const Testimonial: React.FC<TestimonialProps> = ({
  blockContainerAnimation,
  onFirstContainerAnimationCompleted,
}) => {
  const {
    imageVariants,
    mainContainerVariants,
    occupationVariants,
    personNameVariants,
    testimonialVariants,
  } = useTestimonialAnimationsVariants();

  return (
    <Container
      variants={mainContainerVariants}
      initial="hidden"
      whileInView={blockContainerAnimation ? undefined : "visible"}
      onAnimationComplete={onFirstContainerAnimationCompleted}
    >
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

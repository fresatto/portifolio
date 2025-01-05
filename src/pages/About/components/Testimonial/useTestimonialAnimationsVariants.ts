import { Variants } from "framer-motion";

export function useTestimonialAnimationsVariants() {
  const mainContainerVariants: Variants = {
    hidden: {
      left: "10px",
    },
    visible: {
      left: 0,
      transition: {
        duration: 0.2,
        repeat: 3,
        repeatType: "reverse",
        delay: 1,
        ease: "easeOut",
      },
    },
  };

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

  return {
    mainContainerVariants,
    testimonialVariants,
    imageVariants,
    personNameVariants,
    occupationVariants,
  };
}

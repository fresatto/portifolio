import React from "react";

import {
  Container,
  Header,
  Percentage,
  ProgressFill,
  ProgressWrapper,
  SkillName,
} from "./styles";

const Skill: React.FC = () => {
  const percentage = 40;

  const percentageFormatted = percentage + "%";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const percentageProgressFillVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: percentageFormatted,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const percentageTextVariants = {
    hidden: { left: 0, opacity: 0 },
    visible: {
      left: percentageFormatted,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const skillNameVariants = {
    hidden: { opacity: 0, y: 13 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
      },
    },
  };

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <Header>
        <SkillName variants={skillNameVariants}>WordPress</SkillName>
        <Percentage variants={percentageTextVariants}>{percentage}%</Percentage>
      </Header>
      <ProgressWrapper>
        <ProgressFill variants={percentageProgressFillVariants} />
      </ProgressWrapper>
    </Container>
  );
};

export default Skill;

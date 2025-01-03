import React from "react";

import {
  Container,
  Header,
  Percentage,
  ProgressFill,
  ProgressWrapper,
  SkillName,
} from "./styles";

type SkillProps = {
  title: string;
  percentageNumber: number;
};

const Skill: React.FC<SkillProps> = ({ title, percentageNumber }) => {
  const percentageFormatted = percentageNumber + "%";

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
        type: "tween",
        ease: [0.1, 0.9, 0.2, 1],
        duration: 3,
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
        duration: 0.8,
      },
    },
  };

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <Header>
        <SkillName variants={skillNameVariants}>{title}</SkillName>
        <Percentage variants={percentageTextVariants}>
          {percentageFormatted}
        </Percentage>
      </Header>
      <ProgressWrapper>
        <ProgressFill variants={percentageProgressFillVariants} />
      </ProgressWrapper>
    </Container>
  );
};

export default Skill;

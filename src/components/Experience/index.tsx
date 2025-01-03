import React from "react";

import { Container, Name, Occupation } from "./styles";

type ExperienceProps = {
  name: string;
  occupation: string;
  time: string;
};

const Experience: React.FC<ExperienceProps> = ({ name, occupation, time }) => {
  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Occupation>{occupation}</Occupation>
      </div>

      <span>{time}</span>
    </Container>
  );
};

export default Experience;

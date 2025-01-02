import React from "react";
import { PropsWithChildren } from "react";

import { Container, Title, TitleWrapper } from "./styles";

type InfoSectionProps = {
  title: string;
} & PropsWithChildren;

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>

      {children}
    </Container>
  );
};

export default InfoSection;

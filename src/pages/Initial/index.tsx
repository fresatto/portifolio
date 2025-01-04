import React from "react";

import { Container } from "./styles";
import TextCarousel from "../../components/TextCarousel";
import ExplosionCarousel from "../../components/ExplosionCarousel";

const Initial: React.FC = () => {
  return (
    <Container>
      <h1>Gabriel Fresatto</h1>
      {/* <TextCarousel /> */}
      <ExplosionCarousel />
    </Container>
  );
};

export default Initial;

import React from "react";
import { Typography } from "@mui/material";

import InfoSection from "../../components/InfoSection";
import Skill from "../../components/Skill";
import { Container, Stats } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <Skill />
      <InfoSection title="Sobre">
        <Typography>
          My name is David Parker and I am a Web Designer, and I'm very
          passionate and dedicated to my work. With 3 years experience as a
          professional Web Designer, I have acquired the skills and knowledge
          necessary to make your project a success. I enjoy every step of the
          design process, from discussion and collaboration. Thanks a lot for
          your attention and your trust!
        </Typography>
        <hr />
        <Stats>
          <div>
            <span>Nome:</span>
            <strong>Gabriel Fresatto</strong>
          </div>
          <div>
            <span>Idade:</span>
            <strong>29</strong>
          </div>
          <div>
            <span>Cidade:</span>
            <strong>Osasco</strong>
          </div>
          <div>
            <span>Profissão:</span>
            <strong>Desenvolvedor Front-End</strong>
          </div>
          <div>
            <span>Celular:</span>
            <strong>(11) 94150-9081</strong>
          </div>
          <div>
            <span>E-mail:</span>
            <strong>gabrielfresatto@gmail.com</strong>
          </div>
        </Stats>
      </InfoSection>
      <InfoSection title="Conhecimento">
        <Typography variant="h3" mb="16px">
          Programação
        </Typography>
        <Typography>
          <Skill />
        </Typography>
      </InfoSection>
    </Container>
  );
};

export default About;

import React from "react";
import InfoSection from "../../components/InfoSection";
import { Container, Stats } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <InfoSection title="Sobre">
        <p>
          My name is David Parker and I am a Web Designer, and I'm very
          passionate and dedicated to my work. With 3 years experience as a
          professional Web Designer, I have acquired the skills and knowledge
          necessary to make your project a success. I enjoy every step of the
          design process, from discussion and collaboration. Thanks a lot for
          your attention and your trust!
        </p>

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
        <p>
          My name is David Parker and I am a Web Designer, and I'm very
          passionate and dedicated to my work. With 3 years experience as a
          professional Web Designer, I have acquired the skills and knowledge
          necessary to make your project a success. I enjoy every step of the
          design process, from discussion and collaboration. Thanks a lot for
          your attention and your trust!
        </p>
      </InfoSection>
    </Container>
  );
};

export default About;

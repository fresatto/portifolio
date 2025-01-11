import React from "react";
import { Typography } from "@mui/material";

import InfoSection from "../../components/InfoSection";
import Skill from "../../components/Skill";
import { SkillGroup, SkillsSection, SkillsWrapper, Stats } from "./styles";
import Experience from "../../components/Experience";
import TestimonialsSection from "./components/TestimonialsSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";

const About: React.FC = () => {
  const experiences = [
    {
      name: "WeFit Data-Driven Design",
      occupation: "Desenvolvedor Front-End",
      time: "2020-agora",
    },
    {
      name: "JUNI | Optimization Always On (CRO)",
      occupation: "Desenvolvedor Front-End",
      time: "2019-2020",
    },
    {
      name: "Systemhope",
      occupation: "Desenvolvedor Front-End",
      time: "2019-2019",
    },
    {
      name: "Consultamais",
      occupation: "Desenvolvedor Front-End",
      time: "2018-2019",
    },
  ];

  const educationals = [
    {
      name: "Universidade de Mogi das Cruzes",
      occupation: "Sistemas de Informação",
      time: "2012-2016",
    },
    {
      name: "Udacity",
      occupation: "Fundamentos Front-End",
      time: "2018-2018",
    },
  ];

  return (
    <AnimatedPageContainer>
      <InfoSection title="Sobre">
        <Typography>
          Olá! Meu nome é Gabriel e, desde 2018, atuo como desenvolvedor
          Front-End, focado em criar experiências digitais incríveis. Minha
          especialidade é o desenvolvimento com{" "}
          <strong>React e React Native</strong>, mas ao longo da minha
          trajetória, também trabalhei em diversos tipos de projetos que
          ampliaram minha visão e habilidades. Sou apaixonado pelo que faço e
          estou sempre pronto para ajudar as pessoas a transformar ideias em
          algo extraordinário.
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
        <SkillsSection>
          <SkillGroup>
            <Typography variant="h3">Programação</Typography>
            <SkillsWrapper>
              <Skill title="React" percentageNumber={88} />
              <Skill title="React Native" percentageNumber={89} />
              <Skill title="Next JS" percentageNumber={67} />
              <Skill title="HTML" percentageNumber={89} />
              <Skill title="JavaScript" percentageNumber={93} />
              <Skill title="CSS" percentageNumber={91} />
            </SkillsWrapper>
          </SkillGroup>
          <SkillGroup>
            <Typography variant="h3">Idiomas</Typography>
            <SkillsWrapper>
              <Skill title="Inglês" percentageNumber={40} />
            </SkillsWrapper>
          </SkillGroup>
        </SkillsSection>
      </InfoSection>
      <InfoSection title="Experiência">
        <SkillsSection>
          <SkillGroup>
            <Typography variant="h3">Profissional</Typography>
            <SkillsWrapper>
              {experiences.map(({ name, occupation, time }, index, arr) => {
                const lastItem = index === arr.length - 1;

                return (
                  <>
                    <Experience
                      name={name}
                      occupation={occupation}
                      time={time}
                    />
                    {!lastItem ? <hr /> : null}
                  </>
                );
              })}
            </SkillsWrapper>
          </SkillGroup>
          <SkillGroup>
            <Typography variant="h3">Educacional</Typography>
            <SkillsWrapper>
              {educationals.map(({ name, occupation, time }, index, arr) => {
                const lastItem = index === arr.length - 1;

                return (
                  <>
                    <Experience
                      name={name}
                      occupation={occupation}
                      time={time}
                    />
                    {!lastItem ? <hr /> : null}
                  </>
                );
              })}
            </SkillsWrapper>
          </SkillGroup>
        </SkillsSection>
      </InfoSection>
      <TestimonialsSection />
    </AnimatedPageContainer>
  );
};

export default About;

import React from "react";

import InfoSection from "../../components/InfoSection";
import AnimatedPageContainer from "../../components/AnimatedPageContainer";

import MobileAppImage from "../../assets/mobile-app.png";
import WebApps from "../../assets/web-development.png";

import { ServicesWrapper, ServiceWrapper } from "./styles";

const Services: React.FC = () => {
  return (
    <AnimatedPageContainer>
      <InfoSection title="Principais serviços">
        <ServicesWrapper>
          <ServiceWrapper>
            <img src={WebApps} alt="Web apps" />
            <h3>Aplicações Web</h3>
            <hr />
            <ul>
              <li>Sites HTML</li>
              <li>Aplicações ReactJS</li>
              <li>Aplicações NextJS</li>
            </ul>
          </ServiceWrapper>
          <ServiceWrapper>
            <img src={MobileAppImage} alt="Mobile Apps" />
            <h3>Aplicações Mobile</h3>
            <hr />
            <ul>
              <li>Aplicativos Android</li>
              <li>Aplicativos IOS</li>
            </ul>
          </ServiceWrapper>
        </ServicesWrapper>
      </InfoSection>
    </AnimatedPageContainer>
  );
};

export default Services;

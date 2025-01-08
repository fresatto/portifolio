import React, { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Typography } from "@mui/material";

import { ProjectId, projects } from "../projects";

import HapvidaContent from "./components/HapvidaContent";
import AzulContent from "./components/AzulContent";
import NDIContent from "./components/NDIContent";
import ConsultamaisContent from "./components/ConsultamaisContent";

import {
  Content,
  DescriptionWrapper,
  Header,
  HeaderOverlay,
  SkillChip,
  Skills,
  TitleWrapper,
} from "./styles";

type PortfolioItemModalProps = {
  open: boolean;
  currentPortfolioId?: ProjectId;
  onClose: () => void;
};

const PortfolioItemModal: React.FC<PortfolioItemModalProps> = ({
  open,
  onClose,
  currentPortfolioId,
}) => {
  const projectsContents: Record<ProjectId, any> = {
    [ProjectId.Hapvida]: <HapvidaContent />,
    [ProjectId.Azul]: <AzulContent />,
    [ProjectId.NDI]: <NDIContent />,
    [ProjectId.Consultamais]: <ConsultamaisContent />,
  };

  const getProjectInfo = () => {
    if (!currentPortfolioId) return null;

    return projects.find((p) => p.projectId === currentPortfolioId);
  };

  const projectInfo = getProjectInfo();

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Content>
        <Header>
          <img src={projectInfo?.bgImage} />
          <HeaderOverlay />
          <button onClick={onClose}>
            <CloseIcon htmlColor="#fff" />
          </button>
        </Header>

        <DescriptionWrapper>
          <TitleWrapper>
            <Typography variant="h3" id="child-modal-title">
              {projectInfo?.name}
            </Typography>

            <Skills>
              {projectInfo?.techs.map((tech) => (
                <SkillChip key={`${tech}-${currentPortfolioId}`}>
                  <span>{tech}</span>
                </SkillChip>
              ))}
            </Skills>
          </TitleWrapper>
          {currentPortfolioId ? projectsContents[currentPortfolioId] : null}
        </DescriptionWrapper>
      </Content>
    </Modal>
  );
};

export default PortfolioItemModal;

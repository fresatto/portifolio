import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Typography } from "@mui/material";

import { ProjectId, projects } from "../projects";

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
  const getProjectInfo = () => {
    if (!currentPortfolioId) return null;

    return projects.find((p) => p.projectId === currentPortfolioId);
  };

  console.log(
    currentPortfolioId,
    projects,
    projects.find((p) => p.projectId === currentPortfolioId)
  );

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
          <Typography id="child-modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aliquid deserunt quis ducimus eum numquam. Minima eveniet autem hic
            voluptatum adipisci reprehenderit, ad excepturi earum harum, natus
            non distinctio nam?
          </Typography>
          <Typography id="child-modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aliquid deserunt quis ducimus eum numquam. Minima eveniet autem hic
            voluptatum adipisci reprehenderit, ad excepturi earum harum, natus
            non distinctio nam?
          </Typography>
        </DescriptionWrapper>

        {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
      </Content>
    </Modal>
  );
};

export default PortfolioItemModal;

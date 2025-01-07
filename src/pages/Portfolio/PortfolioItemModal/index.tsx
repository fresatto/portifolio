import { Modal } from "@mui/material";
import React from "react";
import { projects } from "..";
import { Content, DescriptionWrapper, Footer } from "./styles";

// import { Container } from './styles';

type PortfolioItemModalProps = {
  open: boolean;
  onClose: () => void;
};

const PortfolioItemModal: React.FC<PortfolioItemModalProps> = ({
  open,
  onClose,
}) => {
  const { bgImage } = projects[0];

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
        <img src={bgImage} />

        <DescriptionWrapper>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description"></p>
        </DescriptionWrapper>

        <Footer>
          <button onClick={onClose}>Fechar</button>
        </Footer>

        {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
      </Content>
    </Modal>
  );
};

export default PortfolioItemModal;

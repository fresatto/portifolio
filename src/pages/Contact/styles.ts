import styled from "styled-components";
import CustomTextArea from "../../components/CustomTextArea";

export const ThreeInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MessageInput = styled(CustomTextArea)`
  margin-top: 16px;
`;

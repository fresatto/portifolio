import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  > div {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.text};

    strong {
      color: ${(props) => props.theme.colors.textBold};
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  gap: 16px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  span {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }
`;

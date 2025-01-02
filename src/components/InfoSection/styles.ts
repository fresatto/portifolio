import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 24px 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
  position: relative;

  p {
    color: ${(props) => props.theme.colors.text};
    line-height: 24px;
  }

  hr {
    border: none;
    background-color: ${(props) => props.theme.colors.text};
    height: 1px;
    margin: 24px 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 38px;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.border};

  position: absolute;
  top: -16px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

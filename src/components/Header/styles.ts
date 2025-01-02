import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;

  padding: ${(props) => props.theme.spacing.medium};

  ${(props) => props.theme.media.largeDesktop} {
    display: none;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

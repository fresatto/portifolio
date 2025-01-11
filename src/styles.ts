import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  ${({ theme }) => theme.media.largeDesktop} {
    padding: 50px;
    background: #eee;
  }

  ${({ theme }) => theme.media.containerLarge} {
    padding: 100px 250px;
    background: #eee;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;

  section {
    padding: 16px;
    background: #fff;
    flex: 1;
    height: 100%;
  }
`;

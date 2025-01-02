import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  ${({ theme }) => theme.media.largeDesktop} {
    padding: 100px 200px;
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

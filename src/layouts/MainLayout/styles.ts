import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;

  ${({ theme }) => theme.media.largeDesktop} {
    flex-direction: row;
  }

  section {
    padding: 16px;
    background: #fff;
    flex: 1;
    height: 100%;
  }
`;

import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;

  ${({ theme }) => theme.media.largeDesktop} {
    gap: 40px;
    flex-direction: row;
  }

  section {
    background: #fff;
    flex: 1;
    height: 100%;
  }
`;

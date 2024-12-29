import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  background: #ccc;
  height: 100%;
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

import styled from "styled-components";

export const Content = styled.div`
  max-width: 400px;
  width: 100%;

  max-height: 40vh;
  height: fit-content;

  overflow: auto;

  background-color: #fff;

  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: grayscale(1);
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 24px;
`;

export const Footer = styled.div`
  padding: 24px;
`;

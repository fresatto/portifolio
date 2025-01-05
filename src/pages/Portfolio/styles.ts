import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FilterWrapper = styled.div``;

export const PortfolioItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => props.theme.media.largeDesktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

type PortfolioItemProps = {
  bgImage: string;
};

export const PortfolioItem = styled.div<PortfolioItemProps>`
  width: 100%;
  height: 400px;

  background-image: url(${(props) => props.bgImage});
  background-size: 100%;
  background-position: center;

  transition: background-size 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-size: 105%;
  }
`;

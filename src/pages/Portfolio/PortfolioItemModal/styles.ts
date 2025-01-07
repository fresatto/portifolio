import styled from "styled-components";

export const Content = styled.div`
  max-width: 400px;
  width: 100%;

  max-height: 80vh;
  height: fit-content;

  overflow: auto;

  background-color: #fff;

  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: grayscale(1);
  }

  ${(props) => props.theme.media.desktop} {
    max-width: 800px;
    max-height: 80vh;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Skills = styled.div`
  margin-top: 4px;

  display: flex;
  gap: 2px;
`;

export const SkillChip = styled.div`
  padding: 4px 8px;
  background: #ccc;
  color: #fff;
  border-radius: 2px;
  font-size: 12px;
  text-transform: uppercase;
`;

export const DescriptionWrapper = styled.div`
  padding: 24px;

  > p {
    margin-bottom: 16px;
  }
`;

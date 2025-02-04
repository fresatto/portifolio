import styled from "styled-components";

export const Stats = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  > div {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.text};

    gap: 8px;

    strong {
      color: ${(props) => props.theme.colors.textBold};
    }
  }

  ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => props.theme.media.largeDesktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  ${(props) => props.theme.media.largeDesktop} {
    flex-direction: row;
  }
`;

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${(props) => props.theme.media.largeDesktop} {
    flex: 1;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  hr {
    margin: 0;
  }
`;

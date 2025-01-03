import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  ${(props) => props.theme.media.largeDesktop} {
    height: 100%;
    overflow: auto;
    padding-top: 15px;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

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
  gap: 40px;

  ${(props) => props.theme.media.largeDesktop} {
    flex-direction: row;
  }
`;

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${(props) => props.theme.media.largeDesktop} {
    flex: 1;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

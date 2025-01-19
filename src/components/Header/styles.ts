import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  background: #fff;

  padding: ${(props) => props.theme.spacing.medium};

  ${(props) => props.theme.media.largeDesktop} {
    display: none;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const DrawerContent = styled.div`
  padding: 40px;

  width: 50vw;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SocialNetworks = styled.div`
  color: var(--font-color);

  strong {
    color: ${(props) => props.theme.colors.textBold};
  }

  p {
    margin-bottom: 8px;
    line-height: 24px;
  }
`;

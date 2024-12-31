import styled from "styled-components";

export const Container = styled.aside`
  padding: 16px;
  background: #fff;
  width: 300px;

  text-align: center;
  display: none;

  ${({ theme }) => theme.media.largeDesktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      color: ${(props) => props.theme.colors.text};

      &.active {
        color: ${(props) => props.theme.colors.textBold};
      }
    }
  }
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

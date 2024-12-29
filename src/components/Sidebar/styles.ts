import styled from "styled-components";

export const Container = styled.aside`
  padding: 16px;
  background: #fff;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;

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
  }
`;

export const SocialNetworks = styled.div`
  p {
    margin-bottom: 8px;
  }
`;

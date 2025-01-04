import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    strong {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};

    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Name = styled.h3`
  font-size: 15px;
  font-weight: bold;
`;

export const Occupation = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;

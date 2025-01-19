import styled from "styled-components";

export const Container = styled.div<{ error?: boolean }>`
  padding: 16px;
  background: ${(props) => (props.error ? "#ffe9e9" : "#ebffec")};
  border-radius: 4px;

  margin-bottom: 16px;
`;

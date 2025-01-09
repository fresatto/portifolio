import styled from "styled-components";

export const Container = styled.div``;

type StyledInputProps = {
  error?: boolean;
  isvalid?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 0;
  border: 1px solid #ccc;
  padding: 0 20px;

  outline: 0;
  font-size: 15px;
  font-family: "Syne", sans-serif;

  border-bottom-color: ${({ error, isvalid }) => {
    if (error) {
      return "red !important";
    }

    if (isvalid) {
      return "green !important";
    }

    return "#ccc";
  }};

  &:focus {
    border-bottom-color: #000;
  }
`;

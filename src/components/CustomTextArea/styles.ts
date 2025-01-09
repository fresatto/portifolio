import styled from "styled-components";

export const Container = styled.div``;

type StyledInputProps = {
  error?: boolean;
  isvalid?: boolean;
};

export const StyledInput = styled.textarea<StyledInputProps>`
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 0;
  border: 1px solid #ccc;
  padding: 16px 20px;

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

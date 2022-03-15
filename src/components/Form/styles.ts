import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font: var(--text-1);
  color: var(--text);
  padding: ${pixelToRem(24, 0)};
`;

export const Input = styled.input`
  width: ${pixelToRem(416)};
  height: ${pixelToRem(56)};
  border: 1px solid var(--gray-05);
  border-radius: ${pixelToRem(6)};
  background: var(--background-form);
  color: var(--text);
`;

import styled from "styled-components";

function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

export const ButtonComponent = styled.button`
  background: var(--mars);
  width: ${pixelToRem(264)};
  height: ${pixelToRem(62)};
  border: none;
  border-radius: ${pixelToRem(6)};
  color: var(--text);
`;

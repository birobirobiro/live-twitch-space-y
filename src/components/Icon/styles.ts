import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

import { IconProps } from ".";

export const DivIcon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(216)};
`;

type ImageProps = Omit<IconProps, "txt">;

export const ImageIcon = styled.image<ImageProps>`
  width: ${pixelToRem(56)};
  height: ${pixelToRem(56)};
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
`;

export const TextIcon = styled.p`
  color: var(--gray-05);
  font: var(--text-1);
  padding-top: ${pixelToRem(8.5)};
`;

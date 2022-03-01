import styled from "styled-components";

import pixelToRem from "../utils/pxToRem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${pixelToRem(24, 112, 50)};
  width: pixelToRem(1440);
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(41)};
  background-image: url("/images/logo-space-y.svg");
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(815)};
  padding-bottom: ${pixelToRem(32)};
`;

export const FirstTitle = styled.p`
  color: var(--sun);
  font: var(--text-3);
  text-transform: uppercase;
  letter-spacing: ${pixelToRem(5)};
`;

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--font-display);

  span {
    color: var(--mars);
  }
`;

export const Subtitle = styled.p`
  color: var(--gray-05);
  font: var(--font-heading-3);
  max-width: ${pixelToRem(728)};
`;

export const AstrounautIllustration = styled.image`
  width: ${pixelToRem(600)};
  height: ${pixelToRem(600)};
  position: absolute;
  background-image: url("/images/home-mars-right.svg");
  background-repeat: no-repeat;
  right: ${pixelToRem(-130)};
  top: ${pixelToRem(10)};
`;

export const DivButton = styled.div`
  width: ${pixelToRem(264)};
  padding-bottom: ${pixelToRem(135)};
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${pixelToRem(1440)};
  align-items: center;
`;

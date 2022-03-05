import styled from "styled-components";

import pixelToRem from "../utils/pxToRem";

interface GalleryFlexContainerProps {
  flex?: "row" | "column";
  width?: string;
  margin?: string;
  padding?: string;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export const Container = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const Header = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(95)};
`;

export const Logo = styled.image<GalleryFlexContainerProps>`
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

export const FirstTitle = styled.div`
  color: var(--sun);
  font: var(--text-4);
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
  width: 100%;
`;

export const SectionAbout = styled.div<GalleryFlexContainerProps>`
  display: flex;
  justify-content: center;
  background: url("/images/stars.jpg") no-repeat;
  background-size: cover;
  flex-direction: ${(props) => props.flex};
`;

export const ImageMars = styled.image`
  width: ${pixelToRem(621)};
  height: ${pixelToRem(621)};
  background-image: url("/images/mars.svg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const DivAboutMars = styled.div<GalleryFlexContainerProps>`
  max-width: ${pixelToRem(603)};
`;

export const SecondSubTitle = styled.p`
  font: var(--font-heading-1);
  color: var(--text);
  padding-top: ${pixelToRem(14)};
`;

export const TextMars = styled.p`
  font: var(--text-1);
  color: var(--gray-05);
  padding-top: ${pixelToRem(26)};
`;

export const GalleryContent = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  margin: ${pixelToRem(150, 100, 157, 300)};
  max-width: ${pixelToRem(500)};
`;

export const DivLogo = styled.div<GalleryFlexContainerProps>`
  max-width: ${pixelToRem(350)};
`;

export const DivLogoSpaceY = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(13)};
`;

export const Gallery = styled.div``;

export const ContainerAbout = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  margin-top: ${pixelToRem(180)};
  gap: ${pixelToRem(200)};
`;

export const TextLogo = styled.p`
  font: var(--font-heading-1);
  color: var(--text);
`;

export const TextSubscribe = styled.p`
  font: var(--text-3);
  color: var(--mars-light);
  cursor: pointer;
  padding-top: ${pixelToRem(20)};
`;

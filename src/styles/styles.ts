import styled from "styled-components";
import pixelToRem from "../utils/pxToRem";
import { device } from "./responsive";
import { motion } from "framer-motion";

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

interface ImageGalleryProps {
  width?: number;
  height?: number;
  src: string;
  borderRadius?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const Container = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  @media ${device.mobile} {
    margin: ${pixelToRem(17)};
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(95)};

  @media ${device.mobile} {
    padding-bottom: ${pixelToRem(78)};
  }
`;

export const Logo = styled.image<GalleryFlexContainerProps>`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(41)};
  background-image: url("/images/logo-space-y.svg");

  @media ${device.mobile} {
    height: ${pixelToRem(30)};
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(815)};
  padding-bottom: ${pixelToRem(103)};

  @media ${device.mobile} {
    max-width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

export const FirstTitle = styled.div`
  color: var(--sun);
  font: var(--text-4);
  text-transform: uppercase;
  letter-spacing: ${pixelToRem(5)};

  @media ${device.mobile} {
    font: var(--font-mobile-text-1);
    letter-spacing: ${pixelToRem(5)};
    padding-bottom: ${pixelToRem(11)};
  }
`;

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--font-display);

  @media ${device.mobile} {
    font: var(--font-mobile-heading-1);
    text-align: center;
  }

  span {
    color: var(--mars);
  }
`;

export const Subtitle = styled.p`
  color: var(--gray-05);
  font: var(--font-heading-3);
  max-width: ${pixelToRem(728)};

  @media ${device.mobile} {
    padding: ${pixelToRem(16, 0, 32, 0)};
    text-align: center;
    max-width: ${pixelToRem(307)};
  }
`;

export const AstrounautIllustration = styled.image`
  width: ${pixelToRem(472)};
  height: ${pixelToRem(600)};
  position: absolute;
  background-image: url("/images/home-mars-right.svg");
  background-repeat: no-repeat;
  right: 0;
  top: ${pixelToRem(10)};

  @media ${device.mobile} {
    position: relative;
    order: 4;
    width: ${pixelToRem(307)};
    left: ${pixelToRem(55)};
  }

  @media (max-width: ${pixelToRem(1200)}) {
    position: relative;
    order: 4;
    width: ${pixelToRem(472)};
    height: ${pixelToRem(600)};
    left: 0;
  }
`;

export const DivButton = styled.div`
  width: ${pixelToRem(264)};
  padding-top: ${pixelToRem(32)};

  @media ${device.mobile} {
    padding-bottom: ${pixelToRem(63)};
  }
`;

export const DivIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  max-width: ${pixelToRem(1440)};
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    gap: ${pixelToRem(64)};
    padding-bottom: ${pixelToRem(72)};
    max-width: ${pixelToRem(222)};

    & image {
      margin: 0 auto;
    }
  }
`;

export const SectionAbout = styled.div<GalleryFlexContainerProps>`
  display: flex;
  justify-content: center;
  background: url("/images/stars.jpg") no-repeat;
  background-size: cover;
  flex-direction: ${(props) => props.flex};

  @media ${device.mobile} {
    display: none;
  }
`;

export const ImageMars = styled(motion.image)`
  width: ${pixelToRem(621)};
  height: ${pixelToRem(621)};
  background-image: url("/images/mars.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const DivAboutMars = styled(motion.div)<GalleryFlexContainerProps>`
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
`;

export const DivLogo = styled(motion.div)<GalleryFlexContainerProps>`
  max-width: ${pixelToRem(350)};
  margin-right: ${pixelToRem(30)};
`;

export const DivLogoSpaceY = styled.div`
  display: flex;
  padding-bottom: ${pixelToRem(13)};
`;

export const ImageGallery = styled.img<ImageGalleryProps>`
  width: ${({ width }) => width && pixelToRem(width)};
  height: ${({ height }) => height && pixelToRem(height)};
  border-radius: ${({ borderRadius }) =>
    borderRadius && pixelToRem(borderRadius)};
  object-fit: ${({ objectFit }) => objectFit};
`;

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

export const TextSubscribe = styled(motion.p)`
  font: var(--text-3);
  color: var(--mars-light);
  cursor: pointer;
  padding-top: ${pixelToRem(20)};
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  background: url("/images/background-stars-form.jpg") no-repeat;
  background-size: cover;
  justify-content: space-around;
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url("/images/background-stars-form.jpg") no-repeat;
  background-size: cover;
  justify-content: space-around;

  @media ${device.mobile} {
    display: none;
  }
`;

export const DivForm = styled(motion.div)`
  background: var(--background-form);
  border-radius: ${pixelToRem(20)};
  align-items: center;
  justify-content: center;
  padding: ${pixelToRem(39, 51, 61, 52)};
  margin-left: ${pixelToRem(120)};
  max-height: ${pixelToRem(792)};
`;
export const IconForm = styled.div`
  background: url("/images/icon-ticket.svg") no-repeat;
  width: ${pixelToRem(56)};
  height: ${pixelToRem(56)};
`;
export const TitleForm = styled.div`
  font: var(--font-heading-2);
  color: var(--text);
  max-width: ${pixelToRem(264)};
  padding-top: ${pixelToRem(16)};
`;
export const SubtitleForm = styled.div`
  font: var(--heading-3);
  color: var(--gray-05);
  max-width: ${pixelToRem(308)};
`;

export const DivRocketImage = styled(motion.div)`
  display: flex;
`;

export const RocketImage = styled(motion.image)`
  width: ${pixelToRem(980)};
  height: ${pixelToRem(980)};
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  padding: ${pixelToRem(24, 0, 32, 0)};
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: ${pixelToRem(24)};
  height: ${pixelToRem(24)};
  border: 1px solid var(--gray-05);
  margin-right: ${pixelToRem(16)};
  appearance: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  content: "";

  &:checked {
    background-color: var(--mars);
  }
`;

export const TextCheckbox = styled.p`
  font: var(--text-1);
  color: var(--gray-05);
`;

export const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    display: none;
  }
`;

export const DivImageSmoke = styled(motion.div)`
  width: 100%;

  & img {
    width: 100%;
  }
`;

export const DivFooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DivSocial = styled.div`
  display: flex;
  gap: ${pixelToRem(20)};

  & img {
    width: ${pixelToRem(25)};
    height: ${pixelToRem(25)};
  }
`;

export const DivFooterMenu = styled.div`
  gap: ${pixelToRem(53)};

  & ul {
    display: flex;
    list-style: none;
    gap: ${pixelToRem(53)};
  }

  & a {
    color: var(--text);
    font: var(--text-3);
    text-decoration: none;
  }
`;

import styled from "styled-components";
import { keyframes } from "styled-components";
import pixelToRem from "../../utils/pxToRem";

const swiper = keyframes`
  from {
    transform: translateX(0%)
  }

  to {
    transform: translateX(100%)
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  
  img {
    width: ${pixelToRem(345)};
    height: ${pixelToRem(353)};
    border-radius: ${pixelToRem(10)};
    margin-right: ${pixelToRem(32)};
    animation: ${swiper} 25s linear infinite;
  }
  ,
  `;

export const ArrowLeft = styled.div`
  display: flex;
  background: url("/images/arrow-gallery.svg") no-repeat;
  width: ${pixelToRem(42)};
  background-position: center;
  cursor: pointer;
  margin: ${pixelToRem(20)};
`;

export const ArrowRight = styled.div`
  display: flex;
  background: url("/images/arrow-gallery.svg") no-repeat;
  transform: rotate(180deg);
  width: ${pixelToRem(42)};
  background-position: center;
  cursor: pointer;
  margin: ${pixelToRem(20)};
`;

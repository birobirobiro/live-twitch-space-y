import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${pixelToRem(345)};
    height: ${pixelToRem(353)};
    border-radius: ${pixelToRem(10)};
    margin-right: ${pixelToRem(32)};
  }
  ,
`;

export const ArrowLeft = styled.div`
  display: flex;
  background: url("/images/arrow-gallery.svg") no-repeat;
  width: ${pixelToRem(42)};
  background-position: center;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  display: flex;
  background: url("/images/arrow-gallery.svg") no-repeat;
  transform: rotate(180deg);
  width: ${pixelToRem(42)};
  background-position: center;
  cursor: pointer;
`;

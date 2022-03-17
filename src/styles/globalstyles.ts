import { createGlobalStyle } from "styled-components";

import pixelToRem from "../utils/pxToRem";
import { device } from "./responsive";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }


body{
  font-family: "Heebo", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: var(--background);
  
  @media ${device.mobile} {
    background: url("/images/stars-mobile.png");
  }

  @media ${device.tablet} {
    background: url("/images/stars-mobile.png");
  }
 }

:root {
  /* Colors */

  --space: #0B1E8A;
  --space-ligth: #3D68B2;
  --space-dark: #040327;
  --gray-01: #0D0E13;
  --gray-02: #2C2D3A;
  --gray-03: #60616F;
  --gray-04: #898A93;
  --gray-05: #D5D5DB;
  --mars: #E85937;
  --mars-light: #FF8C70;
  --mars-dark: #CF3F1D;
  --sun: #F5D15F;
  --uranus: #24FFE9;
  --jupiter: #E00E34;
  --earth: #0FDD86;
  --saturn: #554AD7;
  --text: #FFF;
  --background: #04032C;
  --background-section: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
  --background-form: #0E0D40;
  
  /* Fonts */
    --font-display: 800 ${pixelToRem(62)}/${pixelToRem(96)} "Heebo", sans-serif;

    --font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(
  48
)} "Heebo", sans-serif;

    --font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(
  32
)} "Heebo", sans-serif;

    --font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(
  24
)} "Heebo", sans-serif;


--font-mobile-heading-1: 800 ${pixelToRem(36)}/${pixelToRem(
  50
)} "Heebo", sans-serif;

--font-mobile-text-1: 500 ${pixelToRem(14)}/${pixelToRem(
  24
)} "Heebo", sans-serif;


--text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} "Heebo", sans-serif;
--text-3: 500 ${pixelToRem(18)}/${pixelToRem(24)} "Heebo", sans-serif;
--text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} "Heebo", sans-serif;
--text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} "Heebo", sans-serif;
--text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} "Heebo", sans-serif;

}`;

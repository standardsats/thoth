import styled from "styled-components";
import { css } from "styled-components";

export const sizeVariable = "1000px";

export const resetMarginsAndPaddings = css`
  margin: 0;
  padding: 0;
`;

export const divWithImage = css`
  background-repeat: no-repeat;
  background-size: contain;
`;

export const colorVariables = {
  blueColor: "#366eff",
  lightBlackColor: "#16202C",
  blackColor: "#000000",
  lightGrayColor: "#1A202C",
  darkGrayColor: "#0b132a",
  whiteColor: "#ffffff",
  transparentWhiteColor: "#ffffff80",
  grayColor: "#fcfcfc",
  redColor: "#ff0000",
  lightGreenColor: "#3cc1b3",
  greenColor: "#20F1C0",
  darkGreenColor: "#00BAA4",
  darkColor: "#1C2938",
  deepColor: "#141E29",
  deepGrayColor: "#17212D",
};

export const ButtonNew = styled.button`
  ${resetMarginsAndPaddings};
  font-family: "Gramatika", sans-serif;
  font-style: normal;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export const commonBackgroundMixin = css`
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const divWithBackground = css`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`;

export const coverImage = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const fontFamily = css`
  font-family: Gramatika, sans-serif;
`;

export const fontFamilySecond = css`
  font-family: Plus_Jakarta_Sans, sans-serif;
`;

//How-it-works
export const StepSvgMixin = css`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLinesMixin = css`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 2;
  background-size: cover;

  @media (max-width: ${sizeVariable}) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`;

//ProductsAndService
export const TitleButtonsMixin = css`
  color: ${colorVariables.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const TextMixin = css`
  ${resetMarginsAndPaddings};
  color: ${colorVariables.whiteColor};
  ${fontFamily};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.08);
  }
`;

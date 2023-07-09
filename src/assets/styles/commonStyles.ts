import styled from "styled-components";
import { css } from "styled-components";

export const resetMarginsAndPaddings = css`
  margin: 0;
  padding: 0;
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
  greenColor: "#20F1C0",
  darkGreenColor: "#00BAA4",
  darkColor: "#1C2938",

};

// export const colorVariables = css`
//   --blue-color: #366eff;
//   --black-color: #000000;
//   --dark-gray-color: #0b132a;
//   --wite-color: #ffffff;
//   --gray-color: #fcfcfc;
//   --red-color: #ff0000;
// `;

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

export const divWithImage = css`
  background-repeat: no-repeat;
  background-size: contain;
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

export interface ButtonProps {
  $background?: string;
  width?: string;
}

const greenGradientBackground = css`
  background: linear-gradient(133deg, #20f1c0 0%, #3cc1b3 100%);
`;

const customBackground = css<ButtonProps>`
  background: ${(props) => props.$background};
`;

export const Button = styled.button<ButtonProps>`
  //padding: 8px 28px;
  //box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35),
  //  inset 0 1px 0 rgba(255, 255, 255, 0.3);
  //border-radius: 30px;
  //border: none;
  font-family: "Gramatika", sans-serif;
  font-size: 3.14vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;
  color: #fff;
  border: none;
  position: relative;
  z-index: 1;
  ${resetMarginsAndPaddings};
  border-radius: 4px;
  //background: transparent;
  //background: linear-gradient(133deg, #20f1c0 0%, #3cc1b3 100%);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  width: ${(props) => props.width || "auto"};
  ${({ $background }) =>
    $background ? customBackground : greenGradientBackground};

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonText = styled.span`
  //font-family: "Gramatika", sans-serif;
  //font-size: 3.14vw;
  //font-style: normal;
  //font-weight: 700;
  //line-height: 1.5;
  //letter-spacing: -0.32px;
  //color: #fff;
`;

import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
} from "../../assets/styles/commonStyles.ts";

const { whiteColor } = colorVariables;

type SlideTitleProps = {
  children: ReactNode;
};

const StyledSlideTitle = styled.h3<SlideTitleProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: calc(25vw / 14.4);
  ${fontFamily};
  font-weight: 500;
  line-height: 1.5;
  color: ${whiteColor};

  @media (max-width: 1400px) {
    font-size: calc(25vw / 5.08);
  }
`;

export const SlideTitle: FC<SlideTitleProps> = ({ children, ...style }) => (
  <StyledSlideTitle {...style}>{children}</StyledSlideTitle>
);

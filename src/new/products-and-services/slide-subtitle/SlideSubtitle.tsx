import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
} from "../../../assets/styles/commonStyles.ts";

const { whiteColor } = colorVariables;

type SlideSubtitleProps = {
  children: ReactNode;
};

export const StyledSlideSubtitle = styled.h4<SlideSubtitleProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: calc(22vw / 14.05);
  ${fontFamily};
  font-weight: 500;
  line-height: 1.5;
  color: ${whiteColor};

  @media (max-width: 1400px) {
    font-size: calc(22vw / 5.08);
  }
`;

export const SlideSubtitle: FC<SlideSubtitleProps> = ({
  children,
  ...style
}) => <StyledSlideSubtitle {...style}>{children}</StyledSlideSubtitle>;

import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamilyMedium,
  resetMarginsAndPaddings,
} from "@/assets/styles/commonStyles.ts";

//Types
type SubtitleProps = {
  children: ReactNode;
};

//Styles
export const StyledSubtitle = styled("h4")<SubtitleProps>`
  ${resetMarginsAndPaddings};
  ${fontFamilyMedium};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`;

//Components
export const SubtitleText: FC<SubtitleProps> = ({ children, ...style }) => (
  <StyledSubtitle {...style}>{children}</StyledSubtitle>
);

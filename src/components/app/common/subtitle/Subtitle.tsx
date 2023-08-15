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
const StyledSubtitle = styled("h3")<SubtitleProps>`
  ${resetMarginsAndPaddings};
  ${fontFamilyMedium};
  font-style: normal;
  font-weight: 500;
  word-wrap: break-word;
`;

//Components
export const Subtitle: FC<SubtitleProps> = ({ children, ...props }) => (
  <StyledSubtitle {...props}>{children}</StyledSubtitle>
);

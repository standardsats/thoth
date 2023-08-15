import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamilyMedium,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";

//Types
type SectionTitleProps = {
  children: ReactNode;
  color: string;
};

//Styles
export const StyledSectionTitle = styled.h2<SectionTitleProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${fontFamilyMedium};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${(props) => props.color};

  @media (max-width: ${sizeVariable}) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`;

//Component
export const SectionTitle: FC<SectionTitleProps> = ({ children, ...props }) => (
  <StyledSectionTitle {...props}>{children}</StyledSectionTitle>
);

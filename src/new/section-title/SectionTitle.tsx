import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamily,
  resetMarginsAndPaddings,
} from "../../assets/styles/commonStyles.ts";

interface SectionTitleProps {
  children: ReactNode;
  color: string;
}

export const StyledSectionTitle = styled.h2<SectionTitleProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: calc(50vw / 14.4);
  ${fontFamily};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${(props) => props.color};

  @media (max-width: 1400px) {
    font-size: calc(50vw / 5.08);
    line-height: 1.2;
  }
`;

export const SectionTitle: FC<SectionTitleProps> = ({ children, ...style }) => (
  <StyledSectionTitle {...style}>{children}</StyledSectionTitle>
);

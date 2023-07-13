import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamily,
  resetMarginsAndPaddings,
} from "@/assets/styles/commonStyles.ts";

interface TitleProps {
  children: ReactNode;
  color: string;
}

export const StyledHeading = styled.h4<TitleProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: 3.47vw;
  ${fontFamily};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -1px;
  color: ${(props) => props.color};

  @media (max-width: 1400px) {
    font-size: 9.8vw;
    line-height: 1;
  }
`;

export const Title: FC<TitleProps> = ({ children, ...style }) => (
  <StyledHeading {...style}>{children}</StyledHeading>
);

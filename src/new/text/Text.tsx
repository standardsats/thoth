import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamily,
  resetMarginsAndPaddings,
} from "../../assets/styles/commonStyles.ts";

interface StyledTextProps {
  color: string;
  $margin: string; // Используем $ для transient prop
  $textalign?: string;
  fontSize?: string;
  $lineheight?: string;
  $letter?: string;
  children: ReactNode;
}

const StyledText = styled("p")<StyledTextProps>`
  ${resetMarginsAndPaddings};
  ${(props) => props.$margin && `margin: ${props.$margin};`}
  text-align: ${(props) => props.$textalign || "center"};
  ${fontFamily};
  font-size: ${(props) => props.fontSize || "1.38vw"};
  line-height: ${(props) => props.$lineheight || "1.25"};
  font-weight: 400;
  color: ${(props) => props.color};
  word-wrap: break-word;
  letter-spacing: ${(props) => props.$letter || "normal"};

  @media (max-width: 1400px) {
    font-size: ${(props) => props.fontSize || "3.9vw"};
  }
`;

export const CustomText: FC<StyledTextProps> = ({ children, ...style }) => (
  <StyledText {...style}>{children}</StyledText>
);

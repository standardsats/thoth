import styled from "styled-components";
import { FC, ReactNode } from "react";
import { fontFamily, resetMarginsAndPaddings } from "../../assets/styles/commonStyles.ts";

interface SubtitleProps {
  children: ReactNode;
  color: string;
  $margin: string;
  fontSize?: string;
  $lineheight?: string;
}

const StyledSubtitle = styled("h3")<SubtitleProps>`
  ${resetMarginsAndPaddings};
  ${(props) => props.$margin && `margin: ${props.$margin};`}
  text-align: center;
  ${fontFamily};
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "1.8vw"};
  line-height: ${(props) => props.$lineheight || "1.5"};
  letter-spacing: -0.52px;
  color: ${(props) => props.color};
  word-wrap: break-word;

  @media (max-width: 1400px) {
    font-size: ${(props) => props.fontSize || "5.1vw"};
  }
`;

export const Subtitle: FC<SubtitleProps> = ({ children, ...style }) => (
  <StyledSubtitle {...style}>{children}</StyledSubtitle>
);

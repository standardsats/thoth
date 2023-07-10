import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  fontFamily,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "../../../assets/styles/commonStyles.ts";

//Types
type DescriptionTHOHProps = {
  children: ReactNode;
  color: string;
};

//Styles
const StyledDescriptionTHOH = styled.p<DescriptionTHOHProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${fontFamily};
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.color};

  @media (max-width: ${sizeVariable}) {
    ${fontFamilySecond};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`;

//Component
export const DescriptionTHOH: FC<DescriptionTHOHProps> = ({
  children,
  ...style
}) => <StyledDescriptionTHOH {...style}>{children}</StyledDescriptionTHOH>;

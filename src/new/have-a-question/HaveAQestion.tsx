import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  colorVariables,
  fontFamily,
  fontFamilySecond,
  resetMarginsAndPaddings,
} from "../../assets/styles/commonStyles.ts";
import { SectionTitle } from "../section-title/SectionTitle.tsx";
const { whiteColor } = colorVariables;

type DescriptionTHOHProps = {
  children: ReactNode;
  color: string;
};

const StyledDescriptionTHOH = styled.p<DescriptionTHOHProps>`
  ${resetMarginsAndPaddings};
  text-align: center;
  font-size: calc(20vw / 14.05);
  ${fontFamily};
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.color};

  @media (max-width: 1400px) {
    ${fontFamilySecond};
    font-size: calc(18vw / 5.08);
    line-height: 1.5;
  }
`;

export const HaveAQuestion = () => {
  return (
    <>
      <SectionTitle color={whiteColor}>{news.title}</SectionTitle>

    </>
  )
}

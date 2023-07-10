import styled from "styled-components";
import { ReactNode, FC } from "react";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "../../../assets/styles/commonStyles.ts";

const { lightGrayColor } = colorVariables;

//Types
type StepProps = {
  subtitle: string;
  text: string;
  svg: ReactNode;
};

//Styles
const StyledStep = styled.div`
  position: relative;
  z-index: 1;
  max-width: 19.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    max-width: 54.33vw;
  }
`;

const StyledSubtitle = styled.h3`
  width: 130%;
  ${resetMarginsAndPaddings};
  color: ${lightGrayColor};
  text-align: center;
  ${fontFamily};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.52px;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
    font-size: calc(26vw / 5.08);
    margin: 5vw 0 0 0;
  }
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 1.11vw 0 2.85vw;
  color: ${lightGrayColor};
  text-align: center;
  ${fontFamily};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.08);
    margin: 0.7vw 0 4.72vw;
  }
`;

//Component
export const Step: FC<StepProps> = ({ subtitle, text, svg }) => {
  return (
    <StyledStep>
      {svg}
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledText>{text}</StyledText>
    </StyledStep>
  );
};

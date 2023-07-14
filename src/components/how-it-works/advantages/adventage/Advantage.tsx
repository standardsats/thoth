import styled from "styled-components";
import { FC, ReactNode } from "react";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";

const { whiteColor } = colorVariables;

//Types
type StepProps = {
  subtitle: string;
  text: string;
  svg: ReactNode;
};

//Styles
const StyledAdvantageContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  border-bottom: none;
  align-self: start;
  max-width: ((1440vw - 50vw) / 4);

  @media (max-width: ${sizeVariable}) {
    align-self: center;
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${whiteColor} solid;
  }

  &:last-child {
    border: none;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
  }
`;

const StyledSubtitle = styled.h3`
  ${resetMarginsAndPaddings};
  color: ${whiteColor};
  ${fontFamily};
  font-size: calc(26vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 0.96;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    line-height: 0.83;
    font-size: calc(30vw / 5.08);
  }
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 2.5vw 0 0 0;
  color: ${whiteColor};
  ${fontFamily};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  max-width: 19vw;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.08);
    line-height: 1;
    max-width: 100%;
  }
`;

export const Advantage: FC<StepProps> = ({ subtitle, text, svg }) => {
  return (
    <StyledAdvantageContainer>
      <StyledWrapper>
        {svg}
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledWrapper>
      <StyledText>{text}</StyledText>
    </StyledAdvantageContainer>
  );
};

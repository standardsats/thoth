import styled from "styled-components";
import { FC } from "react";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
import { StepData } from "@/assets/constants/app/main-page/HowItWorks.ts";

const { lightGrayColor } = colorVariables;

//Types
type Props = {
  index: "one" | "two" | "three";
  content: StepData;
};

//Styles
const StyledStep = styled.div`
  position: relative;
  z-index: 1;
  max-width: 20.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    max-width: 55.33vw;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  width: 100%;
  color: ${lightGrayColor};
  text-align: center;
  font-size: calc(26vw / 14.4);
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

const StyledImage = styled.img<{ $index: string }>`
  margin-top: ${({ $index }) =>
    $index === "one" ? "3.9vw" : $index === "two" ? "2.7vw" : "0"};
  margin-bottom: 2vw;
  width: ${({ $index }) =>
    $index === "one" ? "7.4vw" : $index === "two" ? "8.6vw" : "11.3vw"};
  height: ${({ $index }) =>
    $index === "one" ? "7.4vw" : $index === "two" ? "8.6vw" : "11.3vw"};

  @media (max-width: ${sizeVariable}) {
    margin-top: 4vw;
    width: ${({ $index }) =>
      $index === "one" ? "20.86vw" : $index === "two" ? "24.56vw" : "32.08vw"};
    height: ${({ $index }) =>
      $index === "one" ? "20.86vw" : $index === "two" ? "24.56vw" : "32.08vw"};
  }
`;

//Component
export const Step: FC<Props> = ({ index, content }) => {
  return (
    <StyledStep>
      <StyledImage
        $index={index}
        src={content.image.src}
        alt={content.image.alt}
      />
      <StyledSubtitle>{content.subtitle}</StyledSubtitle>
      <StyledText>{content.text}</StyledText>
    </StyledStep>
  );
};

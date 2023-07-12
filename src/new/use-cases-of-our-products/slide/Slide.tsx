import React from "react";
import styled from "styled-components";
import {
  resetMarginsAndPaddings,
  colorVariables,
  fontFamily,
  sizeVariable,
} from "../../../assets/styles/commonStyles.ts";
import { SlideTitle } from "../../common/slide-title/SlideTitle.tsx";

const { whiteColor } = colorVariables;

//Types
type SlideProps = {
  button?: string;
  image: string;
  title: string;
  text: string;
};

//Styles
const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${sizeVariable}) {
    width: 80vw;
    min-height: 68.17vw;
    align-items: start;
  }
`;

const StyledSlideContainer = styled.div`
  @media (max-width: ${sizeVariable}) {
    padding: 7.18vw 0 10.26vw 5vw;
  }
`;

const StyledSlideTitle = styled(SlideTitle)`
  @media (max-width: ${sizeVariable}) {
    width: 100%;
    box-sizing: border-box;
    padding: 9.29vw 1.38vw 5.33vw 12.84vw;
    border-bottom: 1px solid ${whiteColor};
  }
`;

const StyledImage = styled.img`
  margin-right: 2.15vw;
  width: 2.98vw;
  height: auto;

  @media (max-width: ${sizeVariable}) {
    width: 12.45vw;
    margin-right: 3.93vw;
  }
`;

const SlidedSubtitle = styled.h4`
  ${resetMarginsAndPaddings};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${fontFamily};
  font-weight: 500;
  line-height: 1.5;
  color: ${whiteColor};

  @media (max-width: ${sizeVariable}) {
    font-size: calc(22vw / 5.08);
  }
`;

const StyledCardText = styled.p`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: ${whiteColor};
  font-size: calc(20vw / 14.05);
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.08);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: calc(14vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    padding-bottom: calc(24vw / 5.08);
  }
`;

//Component
export const Slide: React.FC<SlideProps> = ({ button, image, title, text }) => {
  return (
    <StyledSlide>
      {button && <StyledSlideTitle>{button}</StyledSlideTitle>}
      <StyledSlideContainer>
        <StyledWrapper>
          <StyledImage src={image} alt={title} />
          <SlidedSubtitle>{title}</SlidedSubtitle>
        </StyledWrapper>
        <StyledCardText>{text}</StyledCardText>
      </StyledSlideContainer>
    </StyledSlide>
  );
};

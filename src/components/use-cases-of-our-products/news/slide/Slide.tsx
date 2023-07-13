import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { FC } from "react";

import { DetailedHTMLProps, HTMLAttributes } from "react";

const { whiteColor, greenColor } = colorVariables;

//Types
interface StyledSubtitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size: string;
}

interface StyledTextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size: string;
}

type SlideProps<T extends "big" | "small"> = {
  slide: {
    id: string;
    span: string;
    date: string;
    title: string;
    text: string;
    image: string;
    alt: string;
  };
  size: T;
};

//Styles
const SlideContainer = styled.div<{ size: string }>`
  width: ${({ size }) =>
    size === "big" ? "calc(696vw / 14.4)" : "calc(413vw / 14.4)"};
  margin-bottom: ${({ size }) =>
    size === "big" ? "calc(42vw / 14.4)" : "calc(50vw / 14.4)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 2px solid ${whiteColor};

  &:nth-child(2n) {
    border-bottom: ${({ size }) =>
      size === "big" ? "none" : `2px solid ${whiteColor}`};
  }

  @media (max-width: ${sizeVariable}) {
    margin-bottom: calc(49vw / 5.08);
    border-bottom: ${({ size }) =>
      size === "small" ? "none" : `2px solid ${whiteColor}`};
    width: ${({ size }) =>
      size === "big" ? "calc(414vw / 5.08)" : "calc(333vw / 5.08)"};
    margin-left: ${({ size }) => (size === "small" ? "8.46vw" : `0`)};

    &:nth-child(2n) {
      border-bottom: ${({ size }) =>
        size === "big" ? `2px solid ${whiteColor}` : "none"};
    }
  }
`;

const StyledWrapper = styled.div<{ size: string }>`
  margin: ${({ size }) => (size === "big" ? "2vw 0 0.71vw" : "1vw 0 1vw")};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    margin: ${({ size }) =>
      size === "big"
        ? "calc(45vw / 5.09) 0 calc(12vw / 5.09)"
        : "calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`;

const StyledSmallText = styled.p`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }
`;

const StyledSpan = styled(StyledSmallText)`
  padding-right: 3vw;
  color: ${greenColor};
`;

const StyledDate = styled(StyledSmallText)`
  color: ${whiteColor};
`;

const StyledSubtitle = styled.h3<StyledSubtitleProps>`
  margin-bottom: calc(6.58vw / 14.4);
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: ${whiteColor};
  font-size: ${({ size }) =>
    size === "big" ? "calc(35vw / 14.4)" : "calc(28vw / 14.4)"};
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 0;
    font-size: ${({ size }) =>
      size === "big" ? "calc(30vw / 5.09)" : "calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`;

const StyledText = styled.p<StyledTextProps>`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  margin: 0.21vw 0 3.26vw;
  font-size: calc(25vw / 14.4);
  color: ${whiteColor};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;
  align-self: start;

  @media (max-width: ${sizeVariable}) {
    margin: 3vw 0 9.84vw;
    font-size: calc(25vw / 5.09);
  }
`;

const StyledImage = styled.img<{ size: string }>`
  height: ${({ size }) =>
    size === "big" ? "calc(268vw / 14.4)" : "calc(154vw / 14.4)"};
  width: ${({ size }) =>
    size === "big" ? "calc(696vw / 14.4)" : "calc(413vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${sizeVariable}) {
    height: ${({ size }) =>
      size === "big" ? "calc(184vw / 5.08)" : "calc(148vw / 5.08)"};
    width: ${({ size }) =>
      size === "big" ? "calc(414vw / 5.08)" : "calc(333vw / 5.08)"};
  }
`;

export const Slide: FC<SlideProps<"big"> | SlideProps<"small">> = ({
  slide,
  size,
}) => {
  return (
    <SlideContainer size={size}>
      <StyledImage size={size} src={slide.image} alt={slide.alt} />
      <StyledWrapper size={size}>
        <StyledSpan>{slide.span}</StyledSpan>
        <StyledDate>{slide.date}</StyledDate>
      </StyledWrapper>
      <StyledSubtitle size={size}>{slide.title}</StyledSubtitle>
      {size === "big" && <StyledText size={size}>{slide.text}</StyledText>}
    </SlideContainer>
  );
};

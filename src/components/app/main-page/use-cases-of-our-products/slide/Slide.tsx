import { FC } from "react";
import styled from "styled-components";
import {
  resetMarginsAndPaddings,
  colorVariables,
  fontFamily,
  sizeVariable,
  fontFamilyMedium,
} from "@/assets/styles/commonStyles.ts";
import { SlideSubtitle } from "@/components/app/common/slide-subtitle/SlideSubtitle.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { UseCasesOfOurProductsSlideData } from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";

const { whiteColor } = colorVariables;

//Types
type SlideProps = {
  subtitle: string;
  slide: UseCasesOfOurProductsSlideData;
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
    padding: 7.18vw 0 10.26vw 10vw;
  }
`;

const StyledSubtitle = styled(SlideSubtitle)`
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

const SlidedCardTitle = styled.h4`
  ${resetMarginsAndPaddings};
  text-align: left;
  font-size: calc(22vw / 14.4);
  ${fontFamilyMedium};
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
export const Slide: FC<SlideProps> = ({ slide, subtitle }) => {
  const { image, title, text } = slide;
  const isMobile = useMobileDetection();

  return (
    <StyledSlide>
      {isMobile && <StyledSubtitle>{subtitle}</StyledSubtitle>}
      <StyledSlideContainer>
        <StyledWrapper>
          <StyledImage src={image.src} alt={image.alt} />
          <SlidedCardTitle>{title}</SlidedCardTitle>
        </StyledWrapper>
        <StyledCardText>{text}</StyledCardText>
      </StyledSlideContainer>
    </StyledSlide>
  );
};

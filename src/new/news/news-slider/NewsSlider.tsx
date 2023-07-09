import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import { Slide } from "../Slide.tsx";

const GlobalStyles = createGlobalStyle`
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    margin: 0;
    height: inherit !important;

    &.slick-slide {
      > div {
        height: 100%;
      }
    }
  }
`;

const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const NewsSlider = ({ slides, size }: { slides: any; size: string }) => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: false,
  };

  return (
    <StyledSliderContainer>
      <GlobalStyles />
      <Slider {...settings}>
        {slides.map((slide: any, index: number) => (
          <Slide key={index} slide={slide} size={size} />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};
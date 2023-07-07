import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import { Slide } from "./slide/Slide.tsx";
import { Slides } from "./ProductsAndServices.tsx";

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

export const MobileSlider = ({ slides }: { slides: Slides }) => {
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

  const buttonKeys = Object.keys(slides);

  return (
    <StyledSliderContainer>
      <GlobalStyles />
      <Slider {...settings}>
        {buttonKeys.map((key, index) => (
          <Slide
            key={index}
            activeButton={key}
            monitorContent={slides[key].content.textContent}
            slides={slides}
          />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

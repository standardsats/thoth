import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "@/components/products-and-services/slide/Slide.tsx";
import { SlideData } from "@/components/products-and-services/ProductsAndServices.tsx";
import { FC } from "react";
import { SliderStyles } from "@/assets/styles/GlobalStyles.ts";

//Types
type MobileSliderProps = {
  slides: SlideData[];
};

//Styles
const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

//Component
export const MobileSlider: FC<MobileSliderProps> = ({ slides }) => {
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
      <SliderStyles />
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

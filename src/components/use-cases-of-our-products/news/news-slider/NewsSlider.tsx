import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "@/components/use-cases-of-our-products/news/slide/Slide.tsx";
import { FC } from "react";
import { SliderStyles } from "@/assets/styles/GlobalStyles.ts";

//Types
type NewSliderProps = {
  slides: Array<{
    id: string;
    span: string;
    date: string;
    title: string;
    text: string;
    image: string;
    alt: string;
  }>;
  size: "small";
};

//Styles
const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

//Component
export const NewsSlider: FC<NewSliderProps> = ({ slides, size }) => {
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
          <Slide key={slide.id} slide={slide} size={size} />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

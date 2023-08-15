import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "./slide/Slide.tsx";
import { FC } from "react";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";

//Types
type Props = {
  size: "small" | "big";
  slides: Array<{
    id: string;
    image: {
      src: string;
      alt: string;
    };
  }>;
};

//Styles
const StyledSliderContainer = styled.div`
  margin: 0 2vw;
  width: 69vw;
  position: relative;

  @media (max-width: ${sizeVariable}) {
    margin: 0 auto;
    width: 100%;
  }
`;

//Component
export const CurrenciesSlider: FC<Props> = ({ slides, size }) => {
  const slidesForShow = size === "small" ? 4 : 11;
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: slidesForShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: false,
    draggable: true,
  };

  return (
    <StyledSliderContainer>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

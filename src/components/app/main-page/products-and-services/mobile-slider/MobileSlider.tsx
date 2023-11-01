import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "../slide/Slide.tsx";
import { FC } from "react";
import {
  MobileWalletLinkData,
  ProductAndServiceSlideData,
} from "@/assets/constants/app/main-page/ProductAndService.ts";

//Types
type MobileSliderProps = {
  slides: ProductAndServiceSlideData[];
  links: MobileWalletLinkData[];
};

//Styles
const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

//Component
export const MobileSlider: FC<MobileSliderProps> = ({ slides, links }) => {
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
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} links={links} />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "../slide/Slide.tsx";
import { FC } from "react";
import {
  MobileWalletLinkType,
  ProductAndServiceSlideType,
} from "@/assets/constants/app/main-page/ProductAndService.ts";

//Types
type Props = {
  slides: ProductAndServiceSlideType[];
  links: MobileWalletLinkType[];
};

//Styles
const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

//Component
export const MobileSlider: FC<Props> = ({ slides, links }) => {
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

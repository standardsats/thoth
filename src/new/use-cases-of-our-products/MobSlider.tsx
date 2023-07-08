import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import { Slide } from "./Slide.tsx";
import { Slides } from "./UseCasesOfOurProducts.tsx";

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
  min-height: 68.17vw;
  background-image: url("/src/assets/images/use-cases-of-our-products/slide-S.svg");
`;

export const MobSlider = ({ slides }: { slides: Slides }) => {
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

  const slideData = buttonKeys.flatMap((key) =>
    slides[key].content.map((item) => ({
      button: slides[key].button,
      image: item.image,
      title: item.title,
      text: item.text,
    }))
  );

  return (
    <StyledSliderContainer>
      <GlobalStyles />
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <Slide
            key={index}
            button={slide.button}
            image={slide.image}
            title={slide.title}
            text={slide.text}
          />
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

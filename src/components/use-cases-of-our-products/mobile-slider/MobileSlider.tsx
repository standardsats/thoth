import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "@/components/use-cases-of-our-products/slide/Slide.tsx";
import { Slides } from "@/components/use-cases-of-our-products/UseCasesOfOurProducts.tsx";
import arrowRight from "@/../public/images/use-cases-of-our-products/slider-bitton.svg";
import { CustomButton } from "@/components/common/customButton/CustomButton.tsx";
import { FC } from "react";

//Type
type MobileSliderProps = {
  slides: Slides;
};

//Style
const StyledButton = styled(CustomButton)<{ isPrev?: boolean }>`
  padding: 0;
  border: none;
  position: absolute;
  top: 12.5%;
  right: 5%;
  width: 9.8vw;
  height: 9.8vw;
  border-radius: 50%;
  background: transparent;
  z-index: 10;
  transition: background-color 0.3s;

  @media (max-width: 1400px) {
    width: ${(props) => (props.isPrev ? "6.39vw" : "8.82vw")};
    height: ${(props) => (props.isPrev ? "6.39vw" : "8.82vw")};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledSlideContainer = styled.div`
  height: 100%;
  background-image: url("images/use-cases-of-our-products/slide-S.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const NextArrow: FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton
    type="button"
    className="arrow next"
    onClick={onClick as () => void}
  >
    <StyledArrowImage src={arrowRight} alt="Next" />
  </StyledButton>
);

export const MobileSlider: FC<MobileSliderProps> = ({ slides }) => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    variableWidth: true,
    centerMode: false,
    prevArrow: <></>,
    nextArrow: <NextArrow />,
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
    <StyledSlideContainer>
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
    </StyledSlideContainer>
  );
};

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "../slide/Slide.tsx";
import { FC } from "react";
import { ArrowButton } from "@/components/app/common/arrow-button/ArrowButton.tsx";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import {
  useCasesOfOurProductsImages,
  photoSlideArrowRightType,
  UseCasesOfOurProductsSlideType,
} from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";

//Type
type Props = {
  subtitle: string;
  slides: UseCasesOfOurProductsSlideType[];
  photoSlideArrowRight: photoSlideArrowRightType;
};

//Style
const StyledArrowImage = styled.img`
  @media (${sizeVariable}) {
    border-radius: 50%;
    width: 8.82vw;
    height: 8.82vw};
  }
`;

const StyledSlideContainer = styled.div`
  height: 100%;
  background-image: url(${useCasesOfOurProductsImages.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

//Component
export const MobileSlider: FC<Props> = ({
  slides,
  subtitle,
  photoSlideArrowRight,
}) => {
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
    nextArrow: (
      <ArrowButton
        className="arrow next"
        top={"12.5%"}
        right={"9%"}
        aria-label={photoSlideArrowRight.alt}
      >
        <StyledArrowImage
          src={photoSlideArrowRight.src}
          alt={photoSlideArrowRight.alt}
        />
      </ArrowButton>
    ),
  };

  return (
    <StyledSlideContainer>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id} subtitle={subtitle} slide={slide} />
        ))}
      </Slider>
    </StyledSlideContainer>
  );
};

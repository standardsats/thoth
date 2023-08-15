import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Slide } from "../slide/Slide.tsx";
import { FC } from "react";
import { SlideData } from "../UseCasesOfOurProducts.tsx";
import { v4 as uuidv4 } from "uuid";
import { ArrowButton } from "@/components/app/common/arrow-button/ArrowButton.tsx";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { mobileSliderImages } from "@/assets/constants/constants.ts";

//Type
type Props = {
  slides: SlideData[];
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
  background-image: url(${mobileSliderImages.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

//Component
export const MobileSlider: FC<Props> = ({ slides }) => {
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
      <ArrowButton className="arrow next" top={"12.5%"} right={"9%"}>
        <StyledArrowImage
          src={mobileSliderImages.right.src}
          alt={mobileSliderImages.right.alt}
        />
      </ArrowButton>
    ),
  };

  const slideData = slides.flatMap((slideItem) =>
    slideItem.content.map((item) => ({
      id: uuidv4(),
      subtitle: slideItem.subtitle,
      image: item.image,
      title: item.title,
      text: item.text,
    }))
  );

  return (
    <StyledSlideContainer>
      <Slider {...settings}>
        {slideData.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </Slider>
    </StyledSlideContainer>
  );
};

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FC } from "react";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { ArrowButton } from "@/components/app/common/arrow-button/ArrowButton.tsx";
import { Slide } from "./slide/Slide.tsx";
import {
  PhotoSlideArrowsType,
  PhotosType,
} from "@/assets/constants/app/main-page/Photo.ts";

//Types
type Props = {
  photos: PhotosType;
  photoSlideArrows: PhotoSlideArrowsType;
};

//Styles
const StyledSlideContent = styled.div`
  margin: 0;
  padding: 0;
  border-radius: 20px;
  width: calc(100% - 4.58vw);
  height: 100%;

  @media (max-width: ${sizeVariable}) {
    width: calc(100% - 4.72vw);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${sizeVariable}) {
    width: calc(100% - 4.72vw);
  }
`;

const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .slick-track {
    display: flex;
    align-items: flex-end;
  }
`;

const StyledArrowImage = styled.img<{ $isPrev?: boolean }>`
  border-radius: 50%;
  width: ${($isPrev) => ($isPrev ? "6.55vw" : "8.62vw")};
  height: ${($isPrev) => ($isPrev ? "6.55vw" : "8.62vw")};

  @media (max-width: ${sizeVariable}) {
    width: ${($isPrev) => ($isPrev ? "6.39vw" : "8.82vw")};
    height: ${($isPrev) => ($isPrev ? "6.39vw" : "8.82vw")};
  }
`;

//Components
export const PhotoSlider: FC<Props> = ({ photos, photoSlideArrows }) => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    nextArrow: (
      <ArrowButton className={"arrow next"} top={"52%"} right={"1%"}>
        <StyledArrowImage
          $isPrev={false}
          src={photoSlideArrows.right.src}
          alt={photoSlideArrows.right.alt}
        />
      </ArrowButton>
    ),
    prevArrow: (
      <ArrowButton className={"arrow prev"} top={"52%"} left={"7%"}>
        <StyledArrowImage
          $isPrev={true}
          src={photoSlideArrows.left.src}
          alt={photoSlideArrows.left.alt}
        />
      </ArrowButton>
    ),
    variableWidth: true,
    initialSlide: 0,
  };

  return (
    <StyledSliderContainer>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <Slide key={photo.id} index={index}>
            <StyledSlideContent>
              <img src={photo.src} alt={photo.alt} />
            </StyledSlideContent>
          </Slide>
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

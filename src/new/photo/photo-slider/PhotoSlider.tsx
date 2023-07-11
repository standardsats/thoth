import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import arrowLeft from "../../../assets/images/photo/arrow-left.svg";
import arrowRight from "../../../assets/images/photo/arrow-right.svg";
import { CustomButton } from "../../common/button/Button.tsx";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { FC, ReactNode } from "react";
import { sizeVariable } from "../../../assets/styles/commonStyles.ts";

//Types
type Slide = {
  index: string;
  image: string;
  alt: string;
};

type SlidesProps = {
  slides: Slide[];
};

type SlideProps = {
  index: string;
  children: ReactNode;
};

//Styles
const StyledSlide = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
`;

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

const StyledButton = styled(CustomButton)<{ isPrev?: boolean }>`
  padding: 0;
  border: none;
  position: absolute;
  top: ${(props) => (props.isPrev ? "42.5%" : "40%")};
  width: ${(props) => (props.isPrev ? "6.55vw" : "8.62vw")};
  height: ${(props) => (props.isPrev ? "6.55vw" : "8.62vw")};
  border-radius: 50%;
  background: transparent;
  z-index: 10;
  transition: background-color 0.3s;

  @media (max-width: ${sizeVariable}) {
    width: ${(props) => (props.isPrev ? "6.39vw" : "8.82vw")};
    height: ${(props) => (props.isPrev ? "6.39vw" : "8.82vw")};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.prev {
    left: 7.82vw;
  }

  &.next {
    right: 1.96vw;
  }
`;

const StyledArrowImage = styled.img`
  width: 100%;
  height: 100%;
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

//Components
const Slide: FC<SlideProps> = ({ children, index }) => {
  const isMobile = useMobileDetection();
  const parsedIndex = parseInt(index);

  let width = "";
  let height = "";

  if (isMobile) {
    height =
      parsedIndex % 3 === 0
        ? "50vw"
        : parsedIndex % 3 === 1
        ? "57.28vw"
        : "44.49vw";
    width =
      parsedIndex % 3 === 0
        ? "58.26vw"
        : parsedIndex % 3 === 1
        ? "66.14vw"
        : "52.36vw";
  } else {
    height =
      parsedIndex % 3 === 0
        ? "50vw"
        : parsedIndex % 3 === 1
        ? "55.83vw"
        : "44.44vw";
    width =
      parsedIndex % 3 === 0
        ? "56.91vw"
        : parsedIndex % 3 === 1
        ? "64.44vw"
        : "51.11vw";
  }
  return <StyledSlide style={{ height, width }}>{children}</StyledSlide>;
};

const NextArrow: FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton
    type="button"
    className="arrow next"
    onClick={onClick as () => void}
  >
    <StyledArrowImage src={arrowRight} alt="Next" />
  </StyledButton>
);

const PrevArrow: FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton
    type="button"
    className="arrow prev"
    onClick={onClick as () => void}
    isPrev
  >
    <StyledArrowImage src={arrowLeft} alt="Next" />
  </StyledButton>
);

export const PhotoSlider: FC<SlidesProps> = ({ slides }) => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: true,
    initialSlide: 0,
  };

  return (
    <StyledSliderContainer>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.index} index={slide.index}>
            <StyledSlideContent>
              <img src={slide.image} alt={slide.alt} />
            </StyledSlideContent>
          </Slide>
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

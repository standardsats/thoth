import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import arrowLeft from "../../../assets/images/photo/arrow-left.svg";
import arrowRight from "../../../assets/images/photo/arrow-right.svg";
import image1 from "../../../assets/images/test/test-photo.jpg";
import image2 from "../../../assets/images/test/test-photo.jpg";
import image3 from "../../../assets/images/test/test-photo.jpg";
import { CustomButton } from "../../common/button/Button.tsx";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";

interface SlideProps {
  index: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children, index }) => {
  const isMobile = useMobileDetection();
  let width = "";
  let height = "";

  if (isMobile) {
    height = index % 3 === 0 ? "50vw" : index % 3 === 1 ? "57.28vw" : "44.49vw";
    width =
      index % 3 === 0 ? "58.26vw" : index % 3 === 1 ? "66.14vw" : "52.36vw";
  } else {
    height = index % 3 === 0 ? "50vw" : index % 3 === 1 ? "55.83vw" : "44.44vw";
    width =
      index % 3 === 0 ? "56.91vw" : index % 3 === 1 ? "64.44vw" : "51.11vw";
  }

  return <StyledSlide style={{ height, width }}>{children}</StyledSlide>;
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton
    type="button"
    className="arrow next"
    onClick={onClick as () => void}
  >
    <StyledArrowImage src={arrowRight} alt="Next" />
  </StyledButton>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton
    type="button"
    className="arrow prev"
    onClick={onClick as () => void}
    isPrev
  >
    <StyledArrowImage src={arrowLeft} alt="Next" />
  </StyledButton>
);

export const PhotoSlider = () => {
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

  // Массив данных для слайдов
  const slideData = [
    { index: 0, content: <img src={image1} alt="Slide 1" /> },
    { index: 1, content: <img src={image2} alt="Slide 2" /> },
    { index: 2, content: <img src={image3} alt="Slide 3" /> },
  ];

  return (
    <StyledSliderContainer>
      <Slider {...settings}>
        {slideData.map((slide) => (
          <Slide key={slide.index} index={slide.index}>
            <StyledSlideContent>{slide.content}</StyledSlideContent>
          </Slide>
        ))}
      </Slider>
    </StyledSliderContainer>
  );
};

const StyledSlide = styled.div`
  border-radius: 20px;
  //width: 272px;
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
  background: #dde0e4;
  margin: 0;
  padding: 0;
  border-radius: 20px;
  width: calc(100% - 4.58vw);
  height: 100%;

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
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

import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import arrowLeft from "../../assets/images/photo/arrow-left.svg";
import arrowRight from "../../assets/images/photo/arrow-right.svg";

interface SlideProps {
  index: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children, index }) => {
  const height = index % 3 === 0 ? 254 : index % 3 === 1 ? 291 : 226;
  const width = index % 3 === 0 ? 272 : index % 3 === 1 ? 312 : 242;
  // const height = index % 3 === 0 ? 254 : index % 3 === 1 ? 291 : 226;
  // const width = index % 3 === 0 ? 272 : index % 3 === 1 ? 312 : 242;
  return <StyledSlide style={{ height, width }}>{children}</StyledSlide>;
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton className="arrow next" onClick={onClick}>
    <StyledArrowImage src={arrowRight} alt="Next" />
  </StyledButton>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <StyledButton className="arrow prev" onClick={onClick}>
    <StyledArrowImage src={arrowLeft} alt="Next" />
  </StyledButton>
);

const NewSlider = () => {
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
        <Slide index={0}>
          <StyledSlideContent>1</StyledSlideContent>
        </Slide>
        <Slide index={1}>
          <StyledSlideContent>2</StyledSlideContent>
        </Slide>
        <Slide index={2}>
          <StyledSlideContent>3</StyledSlideContent>
        </Slide>
      </Slider>
    </StyledSliderContainer>
  );
};

const StyledSlide = styled.div`
  border-radius: 20px;
  width: 272px;
`;

const StyledSlideContent = styled.h3`
  background: #dde0e4;
  margin: 0;
  padding: 0;
  border-radius: 20px;
  width: 85%;
  height: 100%;
`;

const StyledButton = styled.button`
  outline: none !important;
  padding: 0;
  border: none;
  position: absolute;
  top: 40%;
  width: 44.849px;
  height: 44.849px;
  background: transparent;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const StyledArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  position: relative;

  @media (max-width: 1400px) {
    //min-height: 212.58vw;
    //background-image: url("/src/assets/images/advantages/advantages-S.svg");
    //flex-direction: column;
  }
`;

export default NewSlider;

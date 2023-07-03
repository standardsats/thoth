import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.css";
import arrowLeft from "../../assets/images/photo/arrow-left.svg";
import arrowRight from "../../assets/images/photo/arrow-right.svg";

interface SlideProps {
  index: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children, index }) => {
  const height = index % 3 === 0 ? 254 : index % 3 === 1 ? 291 : 226;
  const width = index % 3 === 0 ? 272 : index % 3 === 1 ? 312 : 242;
  // const width = 272;
  return (
    <div className="slide" style={{ height, width }}>
      {children}
    </div>
  );
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button className="arrow next" onClick={onClick}>
    <img
      src={arrowRight}
      alt="Next"
      style={{
        width: "44.849px",
        height: "44.849px",
        zIndex: "10",
        position: "relative",
      }}
    />
  </button>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button className="arrow prev" onClick={onClick}>
    <img
      src={arrowLeft}
      alt="Next"
      style={{
        width: "44.849px",
        height: "44.849px",
        zIndex: "10",
        position: "relative",
      }}
    />
  </button>
);

function MySlider() {
  // useEffect(() => {
  //     const slides = document.querySelectorAll('.slick-slide');
  //
  //     slides.forEach((element) => {
  //         const slide = element as HTMLElement;
  //         const index = parseInt(slide.getAttribute('data-index') || '0', 10);
  //         const height = index % 3 === 0 ? 254 : index % 3 === 1 ? 291 : 226;
  //         slide.style.height = `${height}px`;
  //     });
  // }, []);

  const customPaging = (index: number) => <div className="dot" key={index} />;

  const appendDots = (dots: React.ReactNode[]) => (
    <ul>
      {dots.map((dot, index) => (
        <li key={index}>{dot}</li>
      ))}
    </ul>
  );

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    appendDots,
    customPaging,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerPadding: '-200px',
    variableWidth: true,
    initialSlide: 0,
  };

  return (
    <div className="slider-container">
      {/*<h2>Center Mode</h2>*/}
      <Slider {...settings}>
        <Slide index={0}>
          <h3>1</h3>
        </Slide>
        <Slide index={1}>
          <h3>2</h3>
        </Slide>
        <Slide index={2}>
          <h3>3</h3>
        </Slide>
      </Slider>
    </div>
  );
}

export default MySlider;

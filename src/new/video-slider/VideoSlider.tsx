import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const VideoContainer = styled.div`
  width: 50%;
`;

const SlideContainerWrapper = styled.div`
  width: 50%;
  position: relative;
`;

const SlideContainer = styled.div`
  height: 400px;
  overflow-y: scroll;
`;

const Slide = styled.div`
  height: 200px;
  margin-bottom: 10px;
  background-color: lightgray;
  cursor: pointer;
`;

const SelectedSlide = styled.div`
  height: 200px;
  margin-bottom: 10px;
  background-color: lightblue;
`;

const Scrollbar = styled.div`
  //height: 100px;
  //background-color: gray;
  //cursor: pointer;
  //position: relative;

  //&::after {
  //  content: "";
  //  position: absolute;
  //  top: 50%;
  //  right: 0;
  //  transform: translate(50%, -50%);
  //  width: 10px;
  //  height: 50px;
  //  background-color: red;
  //}
`;

export const VideoSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const maxScrollPosition = scrollHeight - clientHeight;
    const position = (scrollTop / maxScrollPosition) * 100;
    setScrollPosition(position);
  };

  const handleScrollbarDrag = (e) => {
    const { clientY } = e;
    const { top, height } = e.target.getBoundingClientRect();
    const position = ((clientY - top) / height) * 100;
    setScrollPosition(position);
  };

  return (
    <SliderContainer>
      <VideoContainer>
        {selectedSlide && <SelectedSlide>{selectedSlide}</SelectedSlide>}
      </VideoContainer>
      <SlideContainerWrapper>
        <SlideContainer onScroll={handleScroll}>
          {[1, 2, 3, 4, 5].map((slide) => (
            <Slide
              key={slide}
              onClick={() => handleSlideClick(slide)}
              style={{
                backgroundColor:
                  selectedSlide === slide ? "lightblue" : "lightgray",
              }}
            >
              Slide {slide}
            </Slide>
          ))}
        </SlideContainer>
        <Scrollbar
          style={{ top: `${scrollPosition}%` }}
          onMouseDown={handleScrollbarDrag}
        />
      </SlideContainerWrapper>
    </SliderContainer>
  );
};

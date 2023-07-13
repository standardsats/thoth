import { useState } from "react";
import styled from "styled-components";
import { DescriptionTHOH } from "../../common/descriptionTHOH/descriptionTHOH.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import {
  colorVariables,
  coverImage,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "../../../assets/styles/commonStyles.ts";

const { darkColor } = colorVariables;

// Data
const sectionVideo = {
  title: "Video",
  text: "Product Description THOTH",
  movies: [
    {
      id: "1",
      title: "Video title 1",
      content: "Slide 1",
    },
    {
      id: "2",
      title: "Video title 2",
      content: "Slide 2",
    },
    {
      id: "3",
      title: "Video title 3",
      content: "Slide 3",
    },
    {
      id: "4",
      title: "Video title 4",
      content: "Slide 4",
    },
    {
      id: "5",
      title: "Video title 5",
      content: "Slide 5",
    },
  ],
};

//Styles
const StyledSlider = styled.section`
  margin: calc(50vw / 14.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSliderContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  width: 80%;
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 1vw 0 2.57vw;
`;

const StyledVideoContainer = styled.div`
  width: 54%;
  height: 100%;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
  }
`;

const StyledSlideContainerWrapper = styled.div`
  border-radius: 20px;
  width: 37%;
  ${coverImage};
  height: auto;
  background-image: url("/src/images/products-and-service/video.svg");

  @media (max-width: ${sizeVariable}) {
    width: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledSlideContainer = styled.div`
  height: 40vw;
  overflow-y: scroll;

  @media (max-width: ${sizeVariable}) {
    height: 125vw;
  }
`;

const StyledSlide = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 14.73vw;
  width: 28.26vw;
  margin: 2.23vw 1.23vw 4.44vw;
  background-color: gray;
  cursor: pointer;
  border-radius: 20px;

  @media (max-width: ${sizeVariable}) {
    height: 44.48vw;
    width: 81.3vw;
    margin: 12vw 6vw 12vw 0;
  }
`;

const StyledSlideTitle = styled.p`
  max-width: 100%;
  position: absolute;
  bottom: -2.5vw;
  left: 2.5vw;
  ${resetMarginsAndPaddings};
  color: ${darkColor};
  ${fontFamily};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.5px;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.08);
    bottom: -8vw;
  }
`;

const StyledSelectedSlide = styled.div`
  position: relative;
  height: 37vw;
  margin: 0 1.23vw 0.79vw;
  background-color: lightblue;
  border-radius: 20px;
  > p {
    bottom: -4vw;
    font-size: calc(30vw / 14.4);
  }

  @media (max-width: ${sizeVariable}) {
    height: 53.34vw;
    margin: 0 6.1vw 12vw;
    > p {
      bottom: -8vw;
      font-size: calc(25vw / 5.08);
    }
  }
`;

const StyledSlideContent = styled.div`
  margin-top: 0.79vw;
`;

//Components
export const VideoSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState("1");

  const handleSlideClick = (slideId: string) => {
    setSelectedSlide(slideId);
  };

  return (
    <StyledSlider>
      <StyledSectionTitle color={darkColor}>
        {sectionVideo.title}
      </StyledSectionTitle>
      <StyledDescriptionTHOH color={darkColor}>
        {sectionVideo.text}
      </StyledDescriptionTHOH>
      <StyledSliderContainer>
        <StyledVideoContainer>
          {/* Видео */}
          {sectionVideo.movies.map((movie) => {
            if (selectedSlide === movie.id) {
              return (
                <StyledSelectedSlide key={movie.id}>
                  <StyledSlideTitle>{movie.title}</StyledSlideTitle>
                  <StyledSlideContent>{movie.content}</StyledSlideContent>
                </StyledSelectedSlide>
              );
            }
            return null;
          })}
        </StyledVideoContainer>
        <StyledSlideContainerWrapper>
          <StyledSlideContainer>
            {/* Слайды */}
            {sectionVideo.movies.map((movie) => (
              <StyledSlide
                key={movie.id}
                onClick={() => handleSlideClick(movie.id)}
                style={{
                  backgroundColor:
                    selectedSlide === movie.id ? "lightblue" : "lightgray",
                }}
              >
                <StyledSlideContent>{movie.content}</StyledSlideContent>
                <StyledSlideTitle>{movie.title}</StyledSlideTitle>
              </StyledSlide>
            ))}
          </StyledSlideContainer>
        </StyledSlideContainerWrapper>
      </StyledSliderContainer>
    </StyledSlider>
  );
};

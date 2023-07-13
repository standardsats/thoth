import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { PhotoSlider } from "@/components/photo/photo-slider/PhotoSlider.tsx";
import { SectionTitle } from "@/components/common/section-title/SectionTitle.tsx";

const { darkGrayColor } = colorVariables;

//Data
const sectionPhoto = {
  title: "Photo",
  slides: [
    {
      index: "0",
      image: "images/test/test-photo.jpg",
      alt: "Slide 1",
    },
    {
      index: "1",
      image: "images/test/test-photo.jpg",
      alt: "Slide 1",
    },
    {
      index: "2",
      image: "images/test/test-photo.jpg",
      alt: "Slide 1",
    },
  ],
};

//Styles
const StyledPhoto = styled.div`
  padding-bottom: 4.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 74.44vw;

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 0;
    min-height: 91.26vw;
    justify-content: space-around;
  }
`;

//Component
export const Photo = () => {
  return (
    <StyledPhoto>
      <SectionTitle color={darkGrayColor}>{sectionPhoto.title}</SectionTitle>
      <PhotoSlider slides={sectionPhoto.slides} />
    </StyledPhoto>
  );
};

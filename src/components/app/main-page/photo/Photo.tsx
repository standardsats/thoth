import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { PhotoSlider } from "./photo-slider/PhotoSlider.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { FC } from "react";
import { photoImages } from "@/assets/constants/constants.ts";

const { darkGrayColor } = colorVariables;

//Data
const sectionPhoto = {
  title: "Photo",
  slides: [
    {
      index: "0",
      image: photoImages.one.image,
      alt: photoImages.one.alt,
    },
    {
      index: "1",
      image: photoImages.two.image,
      alt: photoImages.two.alt,
    },
    {
      index: "2",
      image: photoImages.three.image,
      alt: photoImages.three.alt,
    },
  ],
};

//Types
type Props = {
  id: string;
};

//Styles
const StyledPhoto = styled.section`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 4.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 74.44vw;

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 0;
    min-height: 91.26vw;
    justify-content: space-around;
  }
`;

//Component
export const Photo: FC<Props> = ({ id }) => {
  return (
    <StyledPhoto id={id}>
      <SectionTitle color={darkGrayColor}>{sectionPhoto.title}</SectionTitle>
      <PhotoSlider slides={sectionPhoto.slides} />
    </StyledPhoto>
  );
};

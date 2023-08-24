import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { PhotoSlider } from "./photo-slider/PhotoSlider.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import { PhotoType } from "@/assets/constants/app/main-page/Photo.ts";

const { darkGrayColor } = colorVariables;

//Types
type Props = {
  id: string;
  title: string;
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
export const Photo: FC<Props> = ({ id, title }) => {
  const { t } = useTranslation();
  const photoData = getData("Photo", t) as PhotoType;
  const { photos, photoSlideArrows } = photoData;

  return (
    <StyledPhoto id={id}>
      <SectionTitle color={darkGrayColor}>{title}</SectionTitle>
      <PhotoSlider photos={photos} photoSlideArrows={photoSlideArrows} />
    </StyledPhoto>
  );
};

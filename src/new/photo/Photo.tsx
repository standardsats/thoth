import styled from "styled-components";
import { colorVariables } from "../../assets/styles/commonStyles.ts";
import { sectionHowItWork } from "../../assets/constants/constants.ts";
import { PhotoSlider } from "./photo-slider/PhotoSlider.tsx";
import { SectionTitle } from "../section-title/SectionTitle.tsx";

const StyledPhoto = styled.div`
  padding-bottom: 4.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 74.44vw;

  @media (max-width: 1400px) {
    box-sizing: border-box;
    padding: 0;
    min-height: 91.26vw;
    justify-content: space-around;
  }
`;

export const Photo = () => {
  const { darkGrayColor } = colorVariables;

  return (
    <StyledPhoto>
      <SectionTitle color={darkGrayColor}>
        {sectionHowItWork.title}
      </SectionTitle>
      <PhotoSlider />
    </StyledPhoto>
  );
};

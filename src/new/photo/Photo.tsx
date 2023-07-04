import styled from "styled-components";
import { colorVariables } from "../../assets/styles/commonStyles.ts";
import { Title } from "../title/Title.tsx";
import { sectionHowItWork } from "../../assets/constants/constants.ts";
import { PhotoSlider } from "./photo-slider/PhotoSlider.tsx";

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

  return (
    <StyledPhoto>
      <Title color={colorVariables.darkGrayColor}>
        {sectionHowItWork.title}
      </Title>
      <PhotoSlider />
    </StyledPhoto>
  );
};

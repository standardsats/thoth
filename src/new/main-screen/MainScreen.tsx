import styled from "styled-components";
import {
  colorVariables,
  divWithBackground,
  divWithImage,
  fontFamily,
  resetMarginsAndPaddings,
} from "../../assets/styles/commonStyles.ts";
import { mainScreen } from "../../assets/constants/constants.ts";
import { CustomText } from "../text/Text.tsx";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { CustomButton } from "../common/button/Button.tsx";

const StyledScreen = styled.div`
  ${divWithBackground};
  width: 100%;
  height: auto;
  min-height: 63.47vw;
  background-image: url("/src/assets/images/screen/screen-L.svg");

  @media (max-width: 1400px) {
    width: 100vw;
    min-height: 209.25vw;
    background-image: url("/src/assets/images/screen/screen-S.svg");
  }
`;

const StyledContent = styled.div`
  max-width: 50.76vw;
  padding: 17.47vw 0 0 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1400px) {
    margin: 0 auto;
    padding: 133.05vw 0 0 0;
    min-width: 85vw;
  }
`;

const StyledMainTitle = styled.h1`
  ${resetMarginsAndPaddings};
  color: ${colorVariables.whiteColor};
  font-size: 3.89vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 1400px) {
    font-size: 9.84vw;
  }
`;

const StyledButtonContent = styled.div`
  display: flex;
  min-width: 11.59vw;
  min-height: 3.05vw;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1400px) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`;

const StyledButtonText = styled.span`
  color: ${colorVariables.whiteColor};
  font-size: 1.11vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: 1400px) {
    font-size: 3.15vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url("/src/assets/images/button-open.svg");

  @media (max-width: 1400px) {
    width: 3.35vw;
    height: 2.95vw;
  }
`;

export const MainScreen = () => {
  const isMobile = useMobileDetection();
  const ButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button open account");
  };

  const fontSize = isMobile ? "4.92vw" : "1.74vw";
  const margin = isMobile ? "3.58vw 0 6.04vw" : "1.46vw 0 5.9vw";

  const ButtonContent = (
    <StyledButtonContent>
      <StyledButtonText>{mainScreen.button}</StyledButtonText>
      <StyledIcon />
    </StyledButtonContent>
  );

  return (
    <>
      <StyledScreen>
        <StyledContent>
          {!isMobile && (
            <CustomText
              color={colorVariables.transparentWhiteColor}
              fontSize={"1.04vw"}
              $lineheight={"1.2"}
              $margin={"0 0 1.9vw"}
              $textalign={"left"}
            >
              {mainScreen.text}
            </CustomText>
          )}
          <StyledMainTitle>{mainScreen.title}</StyledMainTitle>
          <CustomText
            color={colorVariables.greenColor}
            fontSize={fontSize}
            $lineheight={"1.6"}
            $letter={"-0.5px"}
            $margin={margin}
            $textalign={"left"}
          >
            {mainScreen.text}
          </CustomText>
          <CustomButton
            type={"button"}
            children={ButtonContent}
            onClick={ButtonHandler}
          />
        </StyledContent>
      </StyledScreen>
    </>
  );
};

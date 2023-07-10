import styled from "styled-components";
import {
  colorVariables,
  divWithBackground,
  divWithImage,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { CustomButton } from "../common/button/Button.tsx";

const { greenColor, lightGreenColor, whiteColor } = colorVariables;

//Data
const mainScreen = {
  title: "Accept Bitcoin Payments",
  text: "Send, Store, Exchange and Accept Cryptocurrency.",
  button: "Open Account",
};

//Styles
const StyledScreen = styled.section`
  ${divWithBackground};
  width: 100%;
  height: auto;
  min-height: 63.47vw;
  background-image: url("/src/assets/images/main-screen/screen-L.svg");

  @media (max-width: ${sizeVariable}) {
    width: 100vw;
    min-height: 209.25vw;
    background-image: url("/src/assets/images/main-screen/screen-S.svg");
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

  @media (max-width: ${sizeVariable}) {
    height: 200vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 133.05vw 0 10vw 0;
    min-width: 85vw;
  }
`;

const StyledSpanText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${fontFamily};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`;

const StyledMainTitle = styled.h1`
  ${resetMarginsAndPaddings};
  color: ${whiteColor};
  font-size: 3.89vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: 9.84vw;
  }
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 1.46vw 0 5.9vw;
  ${fontFamily};
  font-size: calc(25vw / 14.4);
  color: ${greenColor};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin: 0;
    font-size: calc(25vw / 5.08);
  }
`;

const StyledButton = styled(CustomButton)`
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );
  @media (max-width: ${sizeVariable}) {
    padding: calc(12vw / 5.08);
  }
`;

const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledButtonText = styled.span`
  ${resetMarginsAndPaddings};
  margin-right: calc(20vw / 14.4);
  color: ${whiteColor};
  font-size: 1.11vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${sizeVariable}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url("/src/assets/images/common/play-icon.svg");

  @media (max-width: ${sizeVariable}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`;

//Component
export const MainScreen = () => {
  const isMobile = useMobileDetection();
  const ButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button open account");
  };

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
          {!isMobile && <StyledSpanText>{mainScreen.text}</StyledSpanText>}
          <StyledMainTitle>{mainScreen.title}</StyledMainTitle>
          <StyledText>{mainScreen.text}</StyledText>
          <StyledButton
            type={"button"}
            children={ButtonContent}
            onClick={ButtonHandler}
          />
        </StyledContent>
      </StyledScreen>
    </>
  );
};
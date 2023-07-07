import styled from "styled-components";
import {
  divWithBackground,
  fontFamily,
} from "../../../assets/styles/commonStyles.ts";
import { CustomText } from "../../text/Text.tsx";
import { colorVariables } from "../../../assets/styles/commonStyles.ts";
import { CustomButton } from "../../common/button/Button.tsx";
import { Slides } from "../ProductsAndServices.tsx";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { Subtitle } from "../../subtitle/Subtitle.tsx";

const StyledWrapper = styled.div`
  width: 82.25vw;

  @media (max-width: 1400px) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`;

const StyledSlide = styled.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${divWithBackground};
  background-image: url("/src/assets/images/products-and-service/item-L.svg");
  border-radius: 30px;

  @media (max-width: 1400px) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url("/src/assets/images/products-and-service/item-S.svg");
  }
`;

const StyledSlideContent = styled.div`
  max-width: 29vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 1400px) {
    margin: 0 auto;
    max-width: 57.28vw;
    box-sizing: border-box;
  }
`;

const StyledMonitorButton = styled(CustomButton)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${colorVariables.greenColor};
  font-size: 1.74vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: 1400px) {
    padding-right: 6vw;
    font-size: 4.91vw;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url("/src/assets/images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: 1400px) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`;

const StyledImage = styled.img`
  padding: 5.24vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: 1400px) {
    margin: 0;
    padding: 12.77vw 0 11.59vw;
    width: 95%;
    height: auto;
    object-position: center top;
  }

  @media (min-width: 1399px) {
    max-height: 21.5vw;
  }
`;

type SlideProps = {
  activeButton: string;
  monitorContent: string;
  slides: Slides;
};

export const Slide = ({ activeButton, monitorContent, slides }: SlideProps) => {
  const isMobile = useMobileDetection();
  const title = slides[activeButton].button;

  const fontSize = isMobile ? "3.94vw" : "1.74vw";
  const margin = isMobile ? "12.95vw 0 4.32vw" : "6.74vw 0 2.57vw";
  const letter = isMobile ? "-0.4px" : "-0.5px";

  return (
    <StyledWrapper>
      <StyledSlide>
        {isMobile && (
          <Subtitle
            color={colorVariables.whiteColor}
            fontSize={"4.9vw"}
            $lineheight={"1.5"}
            $margin={"0"}
          >
            {title}
          </Subtitle>
        )}
        <StyledSlideContent>
          <CustomText
            color={colorVariables.whiteColor}
            fontSize={fontSize}
            $lineheight={"1.6"}
            $margin={margin}
            $letter={letter}
            $textalign={"left"}
          >
            {monitorContent}
          </CustomText>
          <StyledMonitorButton
            type={"button"}
            onClick={() =>
              console.log("Press", slides[activeButton].content.button)
            }
          >
            {slides[activeButton].content.button}
          </StyledMonitorButton>
        </StyledSlideContent>
        <StyledImage src={slides[activeButton].content.image} alt="Image" />
      </StyledSlide>
    </StyledWrapper>
  );
};

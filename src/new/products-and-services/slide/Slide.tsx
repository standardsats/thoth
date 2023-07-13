import styled from "styled-components";
import {
  divWithBackground,
  fontFamily,
  sizeVariable,
  TextMixin,
} from "../../../assets/styles/commonStyles.ts";
import { colorVariables } from "../../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { SlideSubtitle } from "../slide-subtitle/SlideSubtitle.tsx";
import { CustomButton } from "../../common/customButton/CustomButton.tsx";
import { SlideData } from "../ProductsAndServices.tsx";
import { FC } from "react";

const { greenColor } = colorVariables;

//Types
type SlideProps = {
  slide: SlideData;
};

//Styles
const StyledWrapper = styled.div`
  width: 82.25vw;

  @media (max-width: ${sizeVariable}) {
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
  background-image: url("/src/images/products-and-service/item-L.svg");
  border-radius: 30px;

  @media (max-width: ${sizeVariable}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url("/src/images/products-and-service/item-S.svg");
  }
`;

const StyledText = styled.p`
  ${TextMixin};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${sizeVariable}) {
    margin: 12.95vw 0 4.32vw;
  }
`;

const StyledSlideContent = styled.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${sizeVariable}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`;

const StyledMonitorButton = styled(CustomButton)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${greenColor};
  font-size: 1.74vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${sizeVariable}) {
    padding-right: 6vw;
    font-size: 4.91vw;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url("/src/images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: ${sizeVariable}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`;

const StyledImageContainer = styled.div`
  height: 20vw;
  width: 40vw;
  padding: 5.24vw 4vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: ${sizeVariable}) {
    margin: 0;
    padding: 6vw 0 0 0;
    height: 30vw;
    width: 70vw;
    object-position: center top;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

//Component
export const Slide: FC<SlideProps> = ({ slide }) => {
  const isMobile = useMobileDetection();

  //TODO актуализировть события
  const handleButton1Click = () => {
    console.log("Button slide 1 clicked");
  };

  const handleButton2Click = () => {
    console.log("Button slide 2 clicked");
  };

  const handleButton3Click = () => {
    console.log("Button slide 3 clicked");
  };

  const handleButton4Click = () => {
    console.log("Button slide 4 clicked");
  };

  const handleButtonClick = (button: string) => {
    switch (button) {
      case "1":
        handleButton1Click();
        break;
      case "2":
        handleButton2Click();
        break;
      case "3":
        handleButton3Click();
        break;
      case "4":
        handleButton4Click();
        break;
      default:
        break;
    }
  };

  return (
    <StyledWrapper>
      <StyledSlide>
        {isMobile && <SlideSubtitle>{slide.mainButton}</SlideSubtitle>}
        <StyledSlideContent>
          <StyledText>{slide.textContent}</StyledText>
          <StyledMonitorButton
            type="button"
            onClick={() => handleButtonClick(slide.id)}
          >
            {slide.button}
          </StyledMonitorButton>
        </StyledSlideContent>
        <StyledImageContainer>
          <StyledImage src={slide.image} alt="Image" />
        </StyledImageContainer>
      </StyledSlide>
    </StyledWrapper>
  );
};

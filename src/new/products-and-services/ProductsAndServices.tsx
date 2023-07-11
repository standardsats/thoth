import { useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  sizeVariable,
  TitleButtonsMixin,
} from "../../assets/styles/commonStyles.ts";
import { MobileWallet } from "./mobile-wallet/MobileWallet.tsx";
import { AvaibleCurrencies } from "./avaible-currencies/AvaibleCurrencies.tsx";
import { Slide } from "./slide/Slide.tsx";
import { MobileSlider } from "./mobile-slider/MobileSlider.tsx";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "../common/descriptionTHOH/descriptionTHOH.tsx";
import { CustomButton } from "../common/customButton/CustomButton.tsx";
import { VideoSlider } from "./video-slider/VidioSlider.tsx";

const { whiteColor, greenColor } = colorVariables;

//Data
const sectionProductsAndService = {
  title: "Products and Services",
  text: "Product Description THOTH",
  slides: [
    {
      id: "1",
      mainButton: "Merchants Solution",
      textContent:
        "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
      button: "Read more",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
    {
      id: "2",
      mainButton: "Enterprise Blockchain Wallets",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
    {
      id: "3",
      mainButton: "Wallet App",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
    {
      id: "4",
      mainButton: "Staking",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: "/src/assets/images/test/test-photo.jpg",
    },
  ],
};

//Types
export type SlideData = {
  id: string;
  mainButton: string;
  textContent: string;
  button: string;
  image: string;
};

//Styles
const StyledDescription = styled.section`
  ${coverImage};
  height: calc(901vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/images/products-and-service/description-L.svg");

  @media (max-width: ${sizeVariable}) {
    height: calc(970vw / 5.08);
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url("/src/assets/images/products-and-service/description-S.svg");
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  width: 80%;
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${sizeVariable}) {
    margin: 1.77vw 0 10.61vw;
  }
`;

const StyledButtons = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledActiveButton = styled(CustomButton)`
  ${TitleButtonsMixin};
  border-bottom: 2px solid ${greenColor};
`;

const StyledButton = styled(CustomButton)`
  ${TitleButtonsMixin};
  border-bottom: 2px solid ${whiteColor};
`;

//Component
export const ProductAndServices = () => {
  const isMobile = useMobileDetection();
  const [activeButton, setActiveButton] = useState<string>("1");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buttonKeys = sectionProductsAndService.slides.map((slide) => slide.id);
  const slideData = sectionProductsAndService.slides.find(
    (slide) => slide.id === activeButton
  );

  return (
    <>
      <StyledDescription>
        <StyledSectionTitle color={whiteColor}>
          {sectionProductsAndService.title}
        </StyledSectionTitle>
        <StyledDescriptionTHOH color={whiteColor}>
          {sectionProductsAndService.text}
        </StyledDescriptionTHOH>
        {!isMobile && (
          <StyledButtons>
            {buttonKeys.map((key) => {
              const isActive = activeButton === key;
              const ButtonComponent = isActive
                ? StyledActiveButton
                : StyledButton;
              const slide = sectionProductsAndService.slides.find(
                (slide) => slide.id === key
              );
              if (slide) {
                return (
                  <ButtonComponent
                    key={slide.id}
                    type={"button"}
                    onClick={() => handleButtonClick(slide.id)}
                  >
                    {slide.mainButton}
                  </ButtonComponent>
                );
              }
              return null;
            })}
          </StyledButtons>
        )}
        {isMobile ? (
          <MobileSlider slides={sectionProductsAndService.slides} />
        ) : (
          slideData && <Slide slide={slideData} />
        )}
      </StyledDescription>
      <MobileWallet />
      <AvaibleCurrencies />
      <VideoSlider />
    </>
  );
};

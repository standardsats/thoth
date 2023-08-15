import { FC, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { MobileWallet } from "./mobile-wallet/MobileWallet.tsx";
import { AvailableCurrencies } from "./available-currencies/AvailableCurrencies.tsx";
import { Slide } from "./slide/Slide.tsx";
import { MobileSlider } from "./mobile-slider/MobileSlider.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "@/components/app/common/descriptionTHOH/descriptionTHOH.tsx";
import { VideoSlider } from "./video-slider/VidioSlider.tsx";
import { SlideButton } from "@/components/app/common/slide-button/SlideButton.tsx";
import { SlideSubtitle } from "@/components/app/common/slide-subtitle/SlideSubtitle.tsx";
import { productsAndServiceImages } from "@/assets/constants/constants.ts";

const { whiteColor } = colorVariables;

//Data
const sectionProductsAndService = {
  title: "Products and Services",
  text: "Product Description THOTH",
  slides: [
    {
      id: "1",
      subtitle: "Merchants Solution",
      textContent:
        "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
      button: "Read more",
      image: productsAndServiceImages.one,
    },
    {
      id: "2",
      subtitle: "Enterprise Blockchain Wallets",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: productsAndServiceImages.two,
    },
    {
      id: "3",
      subtitle: "Wallet App",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: productsAndServiceImages.three,
    },
    {
      id: "4",
      subtitle: "Staking",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: productsAndServiceImages.four,
    },
  ],
};

//Types
type Props = {
  id: string;
};

export type SlideData = {
  id: string;
  subtitle: string;
  textContent: string;
  button: string;
  image: {
    src: string;
    alt: string;
  };
};

//Styles
const StyledDescription = styled.section`
  ${coverImage};
  border-radius: 1.6vw 1.6vw 0 0;
  min-height: calc(901vw / 14.4);
  padding: 4.28vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${productsAndServiceImages.backgroundL});

  @media (max-width: ${sizeVariable}) {
    min-height: calc(970vw / 5.08);
    border-radius: 3.93vw 3.93vw 0 0;
    padding: 14.93vw 0;
    flex-direction: column;
    background-image: url(${productsAndServiceImages.backgroundS});
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

//Component
export const ProductAndServices: FC<Props> = ({ id }) => {
  const isMobile = useMobileDetection();
  const [activeButton, setActiveButton] = useState<string>(
    sectionProductsAndService.slides[0].id
  );

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buttonKeys = sectionProductsAndService.slides.map((slide) => slide.id);
  const slideData = sectionProductsAndService.slides.find(
    (slide) => slide.id === activeButton
  );

  return (
    <section id={id}>
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
              const slide = sectionProductsAndService.slides.find(
                (slide) => slide.id === key
              );
              if (slide) {
                return (
                  <SlideButton
                    key={slide.id}
                    id={slide.id}
                    length={sectionProductsAndService.slides.length}
                    isActive={isActive}
                    onClick={handleButtonClick}
                  >
                    <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
                  </SlideButton>
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
      <AvailableCurrencies />
      <VideoSlider />
    </section>
  );
};

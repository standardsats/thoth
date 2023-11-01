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
//import { VideoSlider } from "./video-slider/VideoSlider.tsx";
import { SlideButton } from "@/components/app/common/slide-button/SlideButton.tsx";
import { SlideSubtitle } from "@/components/app/common/slide-subtitle/SlideSubtitle.tsx";
import { getData } from "@/assets/constants/constants.ts";
import { useTranslation } from "react-i18next";
import {
  ProductAndServiceType,
  productsAndServiceImages,
} from "@/assets/constants/app/main-page/ProductAndService.ts";

const { whiteColor } = colorVariables;

//Types
type ProductAndServicesProps = {
  id: string;
  title: string;
};

//Styles
const StyledDescription = styled.section`
  ${coverImage};
  //border-radius: 1.6vw 1.6vw 0 0;
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
    //border-radius: 3.93vw 3.93vw 0 0;
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
export const ProductAndServices: FC<ProductAndServicesProps> = ({ id, title }) => {
  const isMobile = useMobileDetection();
  const { t } = useTranslation();
  const sectionData = getData("ProductAndService", t) as ProductAndServiceType;
  const { text, slides, mobileWallet, availableCurrencies } = sectionData;
  const [activeButton, setActiveButton] = useState<string>(slides[0].id);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buttonKeys = slides.map((slide) => slide.id);
  const slideData = slides.find((slide) => slide.id === activeButton);

  return (
    <section id={id}>
      <StyledDescription>
        <StyledSectionTitle color={whiteColor}>{title}</StyledSectionTitle>
        <StyledDescriptionTHOH color={whiteColor}>{text}</StyledDescriptionTHOH>
        {!isMobile && (
          <StyledButtons>
            {buttonKeys.map((key, index) => {
              const isActive = activeButton === key;
              const slide = slides.find((slide) => slide.id === key);
              if (slide) {
                const buttonPercentage = [29, 29, 27, 15];
                const width = buttonPercentage[index];
                return (
                  <SlideButton
                    key={slide.id}
                    id={slide.id}
                    width={`${width}%`}
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
          <MobileSlider slides={slides} links={mobileWallet.links} />
        ) : (
          slideData && <Slide slide={slideData} links={mobileWallet.links} />
        )}
      </StyledDescription>
      <MobileWallet mobileWallet={mobileWallet} />
      <AvailableCurrencies availableCurrencies={availableCurrencies} />
      {/*<VideoSlider videoSlider={videoSlider} />*/}
    </section>
  );
};

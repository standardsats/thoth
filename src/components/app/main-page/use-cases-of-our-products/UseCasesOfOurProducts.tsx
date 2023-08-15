import { FC, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { Fees } from "./fees/Fees.tsx";
import { MobileSlider } from "./mobile-slider/MobileSlider.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { Slide } from "./slide/Slide.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "@/components/app/common/descriptionTHOH/descriptionTHOH.tsx";
import { News } from "./news/News.tsx";
import { HaveAQuestion } from "./have-a-question/HaveAQuestion.tsx";
import { SlideSubtitle } from "@/components/app/common/slide-subtitle/SlideSubtitle.tsx";
import { SlideButton } from "@/components/app/common/slide-button/SlideButton.tsx";
import { useCasesOfOurProductsImages } from "@/assets/constants/constants.ts";

const { whiteColor } = colorVariables;

//Data
const useCasesOfOurProducts: UseCasesOfOurProducts = {
  title: "Use Cases of Our Products",
  text: "Product Description THOTH",
  slides: [
    {
      id: "1",
      subtitle: "Merchants Solution",
      content: [
        {
          id: "1",
          image: useCasesOfOurProductsImages.one.one,
          title: "FOREX & CFD Brokers",
          text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
        },
        {
          id: "2",
          image: useCasesOfOurProductsImages.one.two,
          title: "E-commerce",
          text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
        },
        {
          id: "3",
          image: useCasesOfOurProductsImages.one.three,
          title: "Marketplaces",
          text: "There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage.",
        },
        {
          id: "4",
          image: useCasesOfOurProductsImages.one.four,
          title: "Travel Industry",
          text: "The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments.",
        },
        {
          id: "5",
          image: useCasesOfOurProductsImages.one.five,
          title: "Gambling",
          text: "The global online gambling industry is worth billions of dollars. Crypto payments are part for the course.",
        },
        {
          id: "6",
          image: useCasesOfOurProductsImages.one.six,
          title: "FOREX & CFD Brokers",
          text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
        },
      ],
    },
    {
      id: "2",
      subtitle: "Enterprise Solution",
      content: [
        {
          id: "1",
          image: useCasesOfOurProductsImages.two.one,
          title: "FOREX & CFD Brokers",
          text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
        },
      ],
    },
    {
      id: "3",
      subtitle: "White Label",
      content: [
        {
          id: "1",
          image: useCasesOfOurProductsImages.three.one,
          title: "E-commerce",
          text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
        },
      ],
    },
  ],
};

//Type
type Props = {
  id: string;
};

type UseCasesOfOurProducts = {
  title: string;
  text: string;
  slides: SlideData[];
};

export type SlideData = {
  id: string;
  subtitle: string;
  content: Array<{
    id: string;
    image: {
      src: string;
      alt: string;
    };
    title: string;
    text: string;
  }>;
};

const StyledDescription = styled.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(1015vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${useCasesOfOurProductsImages.backgroundL});
  ${coverImage};
  border-radius: 1.6vw;

  @media (max-width: ${sizeVariable}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${useCasesOfOurProductsImages.backgroundS});
    border-radius: 3.93vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${sizeVariable}) {
    margin: 1.76vw 0 0;
  }
`;

const StyledButtons = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledMonitor = styled.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${divWithBackground};
  background-image: url(${useCasesOfOurProductsImages.slide});
  border-radius: 30px;

  @media (max-width: ${sizeVariable}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`;

//Component
export const UseCasesOfOurProducts: FC<Props> = ({ id }) => {
  const isMobile = useMobileDetection();
  const [activeButton, setActiveButton] = useState<string>(
    useCasesOfOurProducts.slides[0].id
  );

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buttonKeys = useCasesOfOurProducts.slides.map((slide) => slide.id);
  const slideData = useCasesOfOurProducts.slides.find(
    (slide) => slide.id === activeButton
  );

  return (
    <section id={id}>
      <StyledDescription>
        <StyledContainer>
          <SectionTitle color={whiteColor}>
            {useCasesOfOurProducts.title}
          </SectionTitle>
          <StyledDescriptionTHOH color={whiteColor}>
            {useCasesOfOurProducts.text}
          </StyledDescriptionTHOH>
          {!isMobile && (
            <StyledButtons>
              {buttonKeys.map((key) => {
                const isActive = activeButton === key;
                const slide = useCasesOfOurProducts.slides.find(
                  (slide) => slide.id === key
                );
                if (slide) {
                  return (
                    <SlideButton
                      key={slide.id}
                      id={slide.id}
                      length={useCasesOfOurProducts.slides.length}
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
        </StyledContainer>
        <StyledMonitor>
          {isMobile ? (
            <MobileSlider slides={useCasesOfOurProducts.slides} />
          ) : (
            slideData &&
            slideData.content.map((card) => (
              <Slide key={card.id} slide={card} />
            ))
          )}
        </StyledMonitor>
      </StyledDescription>
      <Fees />
      <News />
      <HaveAQuestion />
    </section>
  );
};

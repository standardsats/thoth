import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
  sizeVariable,
  TitleButtonsMixin,
} from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "@/components/common/customButton/CustomButton.tsx";
import { Fees } from "@/components/use-cases-of-our-products/fees/Fees.tsx";
import { MobileSlider } from "@/components/use-cases-of-our-products/mobile-slider/MobileSlider.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { Slide } from "@/components/use-cases-of-our-products/slide/Slide.tsx";
import { SectionTitle } from "@/components/common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "@/components/common/descriptionTHOH/descriptionTHOH.tsx";
import { News } from "@/components/use-cases-of-our-products/news/News.tsx";
import { HaveAQuestion } from "@/components/use-cases-of-our-products//have-a-question/HaveAQuestion.tsx";

const { greenColor, whiteColor } = colorVariables;

//Data
const slides: Slides = {
  One: {
    button: "Merchants Solution",
    content: [
      {
        image: "images/use-cases-of-our-products/merchantsSolutionOne.svg",
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
      {
        image: "images/use-cases-of-our-products/merchantsSolutionTwo.svg",
        title: "E-commerce",
        text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
      },
      {
        image: "images/use-cases-of-our-products/merchantsSolutionThree.svg",
        title: "Marketplaces",
        text: "There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage.",
      },
      {
        image: "images/use-cases-of-our-products/merchantsSolutionFour.svg",
        title: "Travel Industry",
        text: "The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments.",
      },
      {
        image: "images/use-cases-of-our-products/merchantsSolutionFive.svg",
        title: "Gambling",
        text: "The global online gambling industry is worth billions of dollars. Crypto payments are part for the course.",
      },
      {
        image: "images/use-cases-of-our-products/merchantsSolutionSix.svg",
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
    ],
  },
  Two: {
    button: "Enterprise Solution",
    content: [
      {
        image: "images/use-cases-of-our-products/merchantsSolutionOne.svg",
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
    ],
  },
  Three: {
    button: "White Label",
    content: [
      {
        image: "images/use-cases-of-our-products/merchantsSolutionTwo.svg",
        title: "E-commerce",
        text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
      },
    ],
  },
};

//Type
const useCasesOfOurProducts: UseCasesOfOurProducts = {
  title: "Use Cases of Our Products",
  text: "Product Description THOTH",
  slides: slides,
};

type UseCasesOfOurProducts = {
  title: string;
  text: string;
  slides: Slides;
};

export type Slides = {
  [key: string]: {
    button: string;
    content: Array<{
      image: string;
      title: string;
      text: string;
    }>;
  };
};

const StyledDescription = styled.section`
  ${coverImage};
  min-height: calc(1015vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("images/use-cases-of-our-products/background-L.svg");

  @media (max-width: ${sizeVariable}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url("images/use-cases-of-our-products/background-S.svg");
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
  background-image: url("images/use-cases-of-our-products/slide-L.svg");
  border-radius: 30px;

  @media (max-width: ${sizeVariable}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`;

const StyledActiveButton = styled(CustomButton)`
  width: calc(100% / 3);
  ${TitleButtonsMixin};
  border-bottom: 2px solid ${greenColor};

  &:hover {
    border-bottom: 2px solid ${greenColor};
  }
`;

const StyledButton = styled(CustomButton)`
  width: calc(100% / 3);
  ${TitleButtonsMixin};
  border-bottom: 2px solid ${whiteColor};

  &:hover {
    border-bottom: 2px solid ${whiteColor};
  }
`;

//Components
export const UseCasesOfOurProducts = () => {
  const isMobile = useMobileDetection();
  const [activeButton, setActiveButton] = useState<string>("One");

  useEffect(() => {
    // Обновить активную кнопку и содержимое монитора при первой загрузке
    setActiveButton("One");
  }, []);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buttonKeys = Object.keys(slides);

  return (
    <>
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
                const ButtonComponent = isActive
                  ? StyledActiveButton
                  : StyledButton;
                return (
                  <ButtonComponent
                    type={"button"}
                    key={key}
                    onClick={() => handleButtonClick(key)}
                  >
                    {slides[key].button}
                  </ButtonComponent>
                );
              })}
            </StyledButtons>
          )}
        </StyledContainer>
        <StyledMonitor>
          {isMobile ? (
            <MobileSlider slides={slides} />
          ) : (
            slides[activeButton].content.map((card, index) => (
              <Slide
                key={index}
                image={card.image}
                title={card.title}
                text={card.text}
              />
            ))
          )}
        </StyledMonitor>
      </StyledDescription>
      <Fees />
      <News />
      <HaveAQuestion />
    </>
  );
};

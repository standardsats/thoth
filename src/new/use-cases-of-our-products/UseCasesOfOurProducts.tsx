import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
} from "../../assets/styles/commonStyles.ts";
import { CustomButton } from "../common/button/Button.tsx";
import { Fees } from "./fees/Fees.tsx";
import { MobSlider } from "./MobSlider.tsx";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { Slide } from "./Slide.tsx";
import { SectionTitle } from "../section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "../descriptionTHOH/descriptionTHOH.tsx";

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

const slides: Slides = {
  One: {
    button: "Merchants Solution",
    content: [
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionOne.svg",
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionTwo.svg",
        title: "E-commerce",
        text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
      },
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionThree.svg",
        title: "Marketplaces",
        text: "There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage.",
      },
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionFour.svg",
        title: "Travel Industry",
        text: "The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments.",
      },
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionFive.svg",
        title: "Gambling",
        text: "The global online gambling industry is worth billions of dollars. Crypto payments are part for the course.",
      },
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionSix.svg",
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
    ],
  },
  Two: {
    button: "Enterprise Solution",
    content: [
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionOne.svg",
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
    ],
  },
  Three: {
    button: "White Label",
    content: [
      {
        image:
          "/src/assets/images/use-cases-of-our-products/merchantsSolutionTwo.svg",
        title: "E-commerce",
        text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
      },
    ],
  },
};

const useCasesOfOurProducts: UseCasesOfOurProducts = {
  title: "Use Cases of Our Products",
  text: "Product Description THOTH",
  slides: slides,
};

const StyledDescription = styled.div`
  ${coverImage};
  min-height: calc(1015vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/images/use-cases-of-our-products/background-L.svg");

  @media (max-width: 1400px) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url("/src/assets/images/use-cases-of-our-products/background-S.svg");
  }
`;

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 1vw 0 2.57vw;

  @media (max-width: 1400px) {
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
  background-image: url("/src/assets/images/use-cases-of-our-products/slide-L.svg");
  border-radius: 30px;

  @media (max-width: 1400px) {
    display: block;
    padding: 0;
    background-image: none;
  }
`;

const StyledActiveButton = styled(CustomButton)`
  border-bottom: 2px solid ${colorVariables.greenColor};

  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 25px;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &:hover {
    border-bottom: 2px solid ${colorVariables.greenColor};
  }
`;

const StyledButton = styled(CustomButton)`
  border-bottom: 2px solid ${colorVariables.whiteColor};

  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 25px;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &:hover {
    border-bottom: 2px solid ${colorVariables.whiteColor};
  }
`;

export const UseCasesOfOurProducts = () => {
  const isMobile = useMobileDetection();
  const [activeButton, setActiveButton] = useState<string>("One");
  const { whiteColor } = colorVariables;

  useEffect(() => {
    // Обновить активную кнопку и содержимое монитора при первой загрузке
    setActiveButton("One");
  }, []);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const buttonKeys = Object.keys(slides);
  console.log(isMobile);

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
                    width={`${98 / buttonKeys.length}%`}
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
            <MobSlider slides={slides} />
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
    </>
  );
};

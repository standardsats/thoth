import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
} from "../../assets/styles/commonStyles.ts";
import { CustomButton } from "../common/button/Button.tsx";
import { Title } from "../title/Title.tsx";
import { CustomText } from "../text/Text.tsx";
import { Subtitle } from "../subtitle/Subtitle.tsx";
import { Fees } from "./fees/Fees.tsx";

type UseCasesOfOurProducts = {
  title: string;
  text: string;
  slides: Slides;
};

type Slides = {
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

const productsAndService: UseCasesOfOurProducts = {
  title: "Use Cases of Our Products",
  text: "Product Description THOTH",
  slides: slides,
};

const StyledDescription = styled.div`
  ${coverImage};
  min-height: calc(901vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/images/products-and-service/description-L.svg");

  @media (max-width: 1400px) {
    min-height: 212.58vw;
    flex-direction: column;
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
  min-height: 30.35vw;
  ${divWithBackground};
  background-image: url("/src/assets/images/products-and-service/item-L.svg");
  border-radius: 30px;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledImage = styled.img`
  margin-right: 2.15vw;
  max-width: 2.98vw;
  height: auto;
`;

const StyledCardTitle = styled(Subtitle)`
  text-align: left;
  font-weight: 500;
  letter-spacing: normal;

  ${({ $margin, fontSize, $lineheight}) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
  `}
`;

const StyledCardText = styled(CustomText)`
  font-weight: 300;

  ${({ $lineheight, $margin, fontSize, $textalign }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign}
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
        <Title color={colorVariables.whiteColor}>
          {productsAndService.title}
        </Title>
        <CustomText
          color={colorVariables.whiteColor}
          fontSize={"1.39vw"}
          $lineheight={"1.5"}
          $margin={"1vw 0 2.57vw"}
        >
          {productsAndService.text}
        </CustomText>
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
        <StyledMonitor>
          {slides[activeButton].content.map((card, index) => (
            <StyledCard key={index}>
              <StyledWrapper>
                <StyledImage src={card.image} alt={card.title} />
                <StyledCardTitle
                  color={colorVariables.whiteColor}
                  $margin={"0"}
                  fontSize={"1.53vw"}
                  $lineheight={"1.5"}
                >
                  {card.title}
                </StyledCardTitle>
              </StyledWrapper>
              <StyledCardText
                color={colorVariables.whiteColor}
                fontSize={"1.39vw"}
                $lineheight={"1.2"}
                $margin={"0"}
                $textalign={"left"}
                $letter={"-0.4px"}
              >
                {card.text}
              </StyledCardText>
            </StyledCard>
          ))}
        </StyledMonitor>
      </StyledDescription>
      <Fees />
    </>
  );
};
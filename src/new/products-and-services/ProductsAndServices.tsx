import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
} from "../../assets/styles/commonStyles.ts";
import { CustomButton } from "../common/button/Button.tsx";
import { MobileWallet } from "./mobile-wallet/MobileWallet.tsx";
import { AvaibleCurrencies } from "./avaible-currencies/AvaibleCurrencies.tsx";
import { Slide } from "./slide/Slide.tsx";
import { MobileSlider } from "./MobileSlider.tsx";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "../descriptionTHOH/descriptionTHOH.tsx";

type ProductsAndService = {
  title: string;
  text: string;
  slides: Slides;
};

export type Slides = {
  [key: string]: {
    button: string;
    content: {
      textContent: string;
      button: string;
      image: string;
    };
  };
};

const slides: Slides = {
  One: {
    button: "Merchants Solution",
    content: {
      textContent:
        "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
      button: "Read more",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
  },
  Two: {
    button: "Enterprise Blockchain Wallets",
    content: {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
  },
  Three: {
    button: "Wallet App",
    content: {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
  },
  Four: {
    button: "Staking",
    content: {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      button: "test",
      image: "/src/assets/images/products-and-service/merchants-solution.svg",
    },
  },
};

const productsAndService: ProductsAndService = {
  title: "Products and Services",
  text: "Product Description THOTH",
  slides: slides,
};

const StyledDescription = styled.div`
  ${coverImage};
  height: calc(901vw / 14.4);
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/images/products-and-service/description-L.svg");

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
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
  border-bottom: 2px solid ${colorVariables.greenColor};

  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 1.74vw;
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
  font-size: 1.74vw;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &:hover {
    border-bottom: 2px solid ${colorVariables.whiteColor};
  }
`;

export const ProductAndServices = () => {
  const { whiteColor } = colorVariables;
  const isMobile = useMobileDetection();
  const [activeButton, setActiveButton] = useState<string>("One");
  const [monitorContent, setMonitorContent] = useState<string>(
    slides["One"].content.textContent
  );

  useEffect(() => {
    // Обновить активную кнопку и содержимое монитора при первой загрузке
    setActiveButton("One");
    setMonitorContent(slides["One"].content.textContent);
  }, []);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setMonitorContent(slides[button].content.textContent);
  };

  const buttonKeys = Object.keys(slides);

  return (
    <>
      <StyledDescription>
        <StyledSectionTitle color={whiteColor}>
          {productsAndService.title}
        </StyledSectionTitle>
        <StyledDescriptionTHOH color={whiteColor}>
          {productsAndService.text}
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
                  width={`${90 / buttonKeys.length}%`}
                >
                  {slides[key].button}
                </ButtonComponent>
              );
            })}
          </StyledButtons>
        )}
        {isMobile ? (
          <MobileSlider slides={slides} />
        ) : (
          <Slide
            activeButton={activeButton}
            monitorContent={monitorContent}
            slides={slides}
          />
        )}
      </StyledDescription>
      <MobileWallet />
      <AvaibleCurrencies />
    </>
  );
};

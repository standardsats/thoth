import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
  fontFamily,
} from "../../assets/styles/commonStyles.ts";
import { CustomButton } from "../common/button/Button.tsx";
import { Title } from "../title/Title.tsx";
import { CustomText } from "../text/Text.tsx";
import { MobileWallet } from "./mobile-wallet/MobileWallet.tsx";
import { AvaibleCurrencies } from "./avaible-currencies/AvaibleCurrencies.tsx";

type ProductsAndService = {
  title: string;
  text: string;
  slides: Slides;
};

type Slides = {
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      button: "test",
      image: "/src/assets/images/test/test-photo.jpg",
    },
  },
  Three: {
    button: "Wallet App",
    content: {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      button: "test",
      image: "/src/assets/images/test/test-photo.jpg",
    },
  },
  Four: {
    button: "Staking",
    content: {
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      button: "test",
      image: "/src/assets/images/test/test-photo.jpg",
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
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88.47vw;
  min-height: 30.35vw;
  ${divWithBackground};
  background-image: url("/src/assets/images/products-and-service/item-L.svg");
  border-radius: 30px;
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
`;

const StyledImage = styled.img`
  padding: 5.24vw;
  position: relative;
  max-height: 21.5vw;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;
`;

export const ProductAndServices = () => {
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
            const ButtonComponent = isActive ? StyledActiveButton : StyledButton;
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
          <div
            style={{
              maxWidth: "29vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <CustomText
              color={colorVariables.whiteColor}
              fontSize={"1.74vw"}
              $lineheight={"1.6"}
              $margin={"6.74vw 0 2.57vw"}
              $letter={"-0.5px"}
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
          </div>
          <StyledImage src={slides[activeButton].content.image} alt="Image" />
        </StyledMonitor>
      </StyledDescription>
      <MobileWallet />
      <AvaibleCurrencies />
    </>
  );
};
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
  fontFamily,
} from "../../../assets/styles/commonStyles.ts";
import { CustomButton } from "../../common/button/Button.tsx";
import { Title } from "../../title/Title.tsx";
import { CustomText } from "../../text/Text.tsx";

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
  position: relative;
  margin-top: 500px;
  ${coverImage};
  height: 1115px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/images/products-and-service/test-L.svg");

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
  position: relative;
  z-index: 999;
  top: -200px;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 41.53vw;
  ${divWithBackground};
  background-image: url("/src/assets/images/products-and-service/test.svg");
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

export const Test = () => {

  return (
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
      <StyledMonitor />
    </StyledDescription>
  );
};
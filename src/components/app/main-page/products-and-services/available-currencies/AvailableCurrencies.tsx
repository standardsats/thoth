import { Fragment } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
  TextMixin,
} from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { CurrenciesSlider } from "./currencies-slider/CurrenciesSlider.tsx";
import { availableCurrenciesImages } from "@/assets/constants/constants.ts";

const { whiteColor, darkGrayColor } = colorVariables;

//Data
const availableCurrencies: AvailableCurrencies = {
  title: "Available Currencies",
  text: "A vast range of major coins, stablecoins and liquid tokens is available.",
  imagesContext: [
    {
      text: "Coins",
      coins: [
        {
          id: "1",
          image: availableCurrenciesImages.one,
        },
        {
          id: "2",
          image: availableCurrenciesImages.two,
        },
        {
          id: "3",
          image: availableCurrenciesImages.three,
        },
        {
          id: "4",
          image: availableCurrenciesImages.four,
        },
        {
          id: "5",
          image: availableCurrenciesImages.five,
        },
        {
          id: "6",
          image: availableCurrenciesImages.six,
        },
        {
          id: "7",
          image: availableCurrenciesImages.seven,
        },
        {
          id: "8",
          image: availableCurrenciesImages.eight,
        },
        {
          id: "9",
          image: availableCurrenciesImages.nine,
        },
        {
          id: "10",
          image: availableCurrenciesImages.ten,
        },
        {
          id: "11",
          image: availableCurrenciesImages.eleven,
        },
        {
          id: "12",
          image: availableCurrenciesImages.twelve,
        },
        {
          id: "13",
          image: availableCurrenciesImages.thirteen,
        },
      ],
    },
  ],
};

//Type
type AvailableCurrencies = {
  title: string;
  text: string;
  imagesContext: ImagesContext[];
};

type ImagesContext = {
  text: string;
  coins: Array<{
    id: string;
    image: {
      src: string;
      alt: string;
    };
  }>;
};

//Styles
const StyledAvailableCurrencies = styled.section`
  width: 100vw;
  box-sizing: border-box;
  ${coverImage};
  background-position: center -9.72vw;
  min-height: calc(800vw / 14.4 - 9.72vw);
  padding: 8.26vw 1vw 8.26vw 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url(${availableCurrenciesImages.background});
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${sizeVariable}) {
    padding: 22vw 0 20.27vw 9vw;
    min-height: 140vw;
    flex-direction: column;
    background-image: none;
    background-color: ${darkGrayColor};
    border-radius: 0;
    overflow-x: hidden;
  }
`;

const StyledGridContainer = styled.div`
  width: 91vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    flex-direction: column;
  }
`;

const StyledText = styled.p`
  ${TextMixin};
  max-width: 37%;
  margin: 2vw 0 6.18vw;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 7.87vw 0 4.3vw;
  }
`;

const StyledGridText = styled.p`
  min-width: 22.5vw;
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: ${whiteColor};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;
  border-right: 1px solid rgba(255, 255, 255, 0.8);

  @media (max-width: ${sizeVariable}) {
    align-self: start;
    text-align: start;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 53%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`;

//Component
export const AvailableCurrencies = () => {
  const isMobile = useMobileDetection();

  return (
    <StyledAvailableCurrencies>
      <SectionTitle color={whiteColor}>
        {availableCurrencies.title}
      </SectionTitle>
      <StyledText>{availableCurrencies.text}</StyledText>
      <StyledGridContainer>
        {availableCurrencies.imagesContext.map((item, index) => (
          <Fragment key={index}>
            <StyledGridText>{item.text}</StyledGridText>
            {!isMobile ? (
              <CurrenciesSlider slides={item.coins} size={"big"} />
            ) : (
              <CurrenciesSlider slides={item.coins} size={"small"} />
            )}
          </Fragment>
        ))}
      </StyledGridContainer>
    </StyledAvailableCurrencies>
  );
};

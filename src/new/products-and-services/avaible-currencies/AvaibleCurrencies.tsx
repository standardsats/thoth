import { Fragment } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
  TextMixin,
} from "../../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

const { whiteColor, darkGrayColor } = colorVariables;

//Data
const avaibleCurrencies: AvaibleCurrencies = {
  title: "Avaible Currencies",
  text: "A vast range of major coins, stablecoins and liquid tokens is available.",
  imagesContext: [
    {
      text: "Coins",
      image: "/src/assets/images/products-and-service/lineOne.svg",
    },
    {
      text: "Stablekoins",
      image: "/src/assets/images/products-and-service/lineTwo.svg",
    },
    {
      text: "Tokens",
      image: "/src/assets/images/products-and-service/lineThree.svg",
    },
  ],
};

//Type
type AvaibleCurrencies = {
  title: string;
  text: string;
  imagesContext: ImagesContext[];
};

type ImagesContext = {
  text: string;
  image: string;
};

//Styles
const StyledAvaibleCurrencies = styled.section`
  ${coverImage};
  background-position: center -9.72vw;
  min-height: calc(1116vw / 14.4 - 9.72vw);
  padding: 8.26vw 0 8.26vw 4.93vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-image: url("/src/assets/images/products-and-service/avaible-currencies.svg");

  @media (max-width: ${sizeVariable}) {
    padding: 22vw 0 20.27vw 4.93vw;
    min-height: 212.58vw;
    flex-direction: column;
    background-image: none;
    background-color: ${darkGrayColor};
  }
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 19vw 1fr;
  grid-template-rows: auto auto auto;
  gap: 5.2vw 1vw;

  @media (max-width: ${sizeVariable}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledGridItemLeft = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    width: 52%;
    align-items: center;
  }
`;

const StyledGridItemRight = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    align-items: end;
    justify-content: end;
  }
`;

const StyledImage = styled.img`
  width: 74vw;
  height: auto;

  @media (max-width: ${sizeVariable}) {
    padding-left: 3.5vw;
    width: 92vw;
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
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: ${whiteColor};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.8px;
  margin: 0 1vw 0 0;

  @media (max-width: ${sizeVariable}) {
    line-height: 1;
    font-size: calc(35vw / 5.8);
    letter-spacing: -0.7px;
    width: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    margin: 14.37vw 0 10vw;
  }
`;

//Component
export const AvaibleCurrencies = () => {
  const isMobile = useMobileDetection();

  return (
    <StyledAvaibleCurrencies>
      <SectionTitle color={whiteColor}>{avaibleCurrencies.title}</SectionTitle>
      <StyledText>{avaibleCurrencies.text}</StyledText>
      <StyledGridContainer>
        {avaibleCurrencies.imagesContext.map((item, index) => (
          <Fragment key={index}>
            <StyledGridItemLeft>
              <StyledGridText>{item.text}</StyledGridText>
            </StyledGridItemLeft>
            <StyledGridItemRight>
              {!isMobile ? (
                <StyledImage src={item.image} alt={item.text} />
              ) : (
                <StyledImage
                  src={"/src/assets/images/products-and-service/line-S.svg"}
                  alt={item.text}
                />
              )}
            </StyledGridItemRight>
          </Fragment>
        ))}
      </StyledGridContainer>
    </StyledAvaibleCurrencies>
  );
};

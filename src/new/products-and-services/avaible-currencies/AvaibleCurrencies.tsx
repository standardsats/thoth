import { Fragment } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
} from "../../../assets/styles/commonStyles.ts";
import { Title } from "../../common/title/Title.tsx";
import { CustomText } from "../../common/text/Text.tsx";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

type AvaibleCurrencies = {
  title: string;
  text: string;
  imagesContext: ImagesContext[];
};

type ImagesContext = {
  text: string;
  image: string;
};

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

const StyledAvaibleCurrencies = styled.div`
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

  @media (max-width: 1400px) {
    padding: 22vw 0 20.27vw 4.93vw;
    min-height: 212.58vw;
    flex-direction: column;
    background-image: none;
    background-color: ${colorVariables.darkGrayColor};
  }
`;

const StyledTitle = styled(Title)`
  text-align: left;
  line-height: 1.2;

  @media (max-width: 1400px) {
    max-width: 80%;
  }
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 19vw 1fr;
  grid-template-rows: auto auto auto;
  gap: 5.2vw 1vw;
  //TODO
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledGridItemLeft = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    width: 52%;
    align-items: center;
  }
`;

const StyledGridItemRight = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    align-items: end;
    justify-content: end;
  }
`;

const StyledImage = styled.img`
  width: 74vw;
  height: auto;
  //TODO
  @media (max-width: 1400px) {
    padding-left: 3.5vw;
    width: 92vw;
  }
`;

const StyledText = styled(CustomText)`
  max-width: 37%;

  @media (max-width: 1400px) {
    max-width: 80%;
  }

  ${({ $lineheight, $margin, fontSize, $textalign }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign}
  `}
`;

const StyledGridText = styled(CustomText)`
  font-weight: 500;
  letter-spacing: -0.8px;

  @media (max-width: 1400px) {
    letter-spacing: -0.5px;
    width: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.8);
  }

  ${({ $lineheight, $margin, fontSize, $textalign }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign}
  `}
`;

export const AvaibleCurrencies = () => {
  const { whiteColor } = colorVariables;
  const isMobile = useMobileDetection();

  const fontSize = isMobile ? "4.92vw" : "1.73vw";
  const margin = isMobile ? "7.87vw 0 4.3vw" : "2vw 0 6.18vw";

  const fontSizeGrid = isMobile ? "6.89vw" : "2.77vw";
  const lineHeightGrid = isMobile ? "1" : "1.5";
  const marginGrid = isMobile ? "14.37vw 0 10vw" : "0 1vw 0 0";

  return (
    <StyledAvaibleCurrencies>
      <SectionTitle color={whiteColor}>{avaibleCurrencies.title}</SectionTitle>
      <StyledText
        color={colorVariables.whiteColor}
        fontSize={fontSize}
        $lineheight={"1.6"}
        $margin={margin}
        $textalign={"left"}
      >
        {avaibleCurrencies.text}
      </StyledText>
      <StyledGridContainer>
        {avaibleCurrencies.imagesContext.map((item, index) => (
          <Fragment key={index}>
            <StyledGridItemLeft>
              <StyledGridText
                color={colorVariables.whiteColor}
                fontSize={fontSizeGrid}
                $lineheight={lineHeightGrid}
                $margin={marginGrid}
                $textalign="left"
              >
                {item.text}
              </StyledGridText>
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

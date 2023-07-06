import styled from "styled-components";
import {
  colorVariables,
  coverImage,
} from "../../../assets/styles/commonStyles.ts";
import { Title } from "../../title/Title.tsx";
import { CustomText } from "../../text/Text.tsx";

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
    min-height: 212.58vw;
    flex-direction: column;
  }
`;

const StyledTitle = styled(Title)`
  text-align: left;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: auto auto auto;
  gap: 5.2vw 1vw;
`;

const StyledGridItemLeft = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
`;

const StyledGridItemRight = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const StyledText = styled(CustomText)`
  max-width: 37%;

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

  ${({ $lineheight, $margin, fontSize, $textalign }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign}
  `}
`;

export const AvaibleCurrencies = () => {
  return (
    <StyledAvaibleCurrencies>
      <StyledTitle color={colorVariables.whiteColor}>
        {avaibleCurrencies.title}
      </StyledTitle>
      <StyledText
        color={colorVariables.whiteColor}
        fontSize={"1.73vw"}
        $lineheight={"1.6"}
        $margin={"2vw 0 6.18vw"}
        $textalign={"left"}
      >
        {avaibleCurrencies.text}
      </StyledText>
      <StyledGridContainer>
        {avaibleCurrencies.imagesContext.map((item, index) => (
          <React.Fragment key={index}>
            <StyledGridItemLeft>
              <StyledGridText
                color={colorVariables.whiteColor}
                fontSize="2.77vw"
                $lineheight="1.5"
                $margin="0 1vw 0 0"
                $textalign="left"
              >
                {item.text}
              </StyledGridText>
            </StyledGridItemLeft>
            <StyledGridItemRight>
              <StyledImage src={item.image} alt={item.text} />
            </StyledGridItemRight>
          </React.Fragment>
        ))}
      </StyledGridContainer>
    </StyledAvaibleCurrencies>
  );
};

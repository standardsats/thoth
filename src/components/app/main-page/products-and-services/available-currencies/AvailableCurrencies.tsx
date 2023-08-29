import { FC } from "react";
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
import {
  AvailableCurrenciesType,
  productsAndServiceImages,
} from "@/assets/constants/app/main-page/ProductAndService.ts";

const { whiteColor, darkGrayColor } = colorVariables;

//Type
type Props = {
  availableCurrencies: AvailableCurrenciesType;
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
  background-image: url(${productsAndServiceImages.availableCurrencies
    .background});
  //border-radius: 0 0 1.6vw 1.6vw;
  border-radius: 0;

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

const StyledSectionTitle = styled(SectionTitle)`
  text-align: left;
  @media (max-width: ${sizeVariable}) {
    padding-right: 9vw;
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
  max-width: 98.5%;
  min-height: 9vw;
  margin: 2vw 0 2vw;

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
export const AvailableCurrencies: FC<Props> = ({ availableCurrencies }) => {
  const { title, text, subtitle, coins } = availableCurrencies;
  const isMobile = useMobileDetection();

  return (
    <StyledAvailableCurrencies>
      <StyledSectionTitle color={whiteColor}>{title}</StyledSectionTitle>
      <StyledText>{text}</StyledText>
      <StyledGridContainer>
        <StyledGridText>{subtitle}</StyledGridText>
        {!isMobile ? (
          <CurrenciesSlider slides={coins} size={"big"} />
        ) : (
          <CurrenciesSlider slides={coins} size={"small"} />
        )}
      </StyledGridContainer>
    </StyledAvailableCurrencies>
  );
};

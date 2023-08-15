import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
import { FeesButton } from "./fees-button/FeesButton.tsx";

const { lightBlackColor, blackColor, darkGreenColor } = colorVariables;

//Data
type Fees = {
  title: string;
  lineOne: {
    title: string;
    text: {
      main: string;
      span: string;
      button: string;
    };
  };
  lineTwo: {
    title: string;
    text: {
      main: string;
    };
  };
};

const fees: Fees = {
  title: "Fees",
  lineOne: {
    title: "Incoming Transactions",
    text: {
      main: "As low as 0.5%",
      span: "and going down based on your total transaction volume.",
      button: "Check pricing details",
    },
  },
  lineTwo: {
    title: "Outgoing Transactions",
    text: {
      main: "Free of charge",
    },
  },
};

//Styles
const StyledFees = styled.section`
  box-sizing: border-box;
  width: 100vw;
  padding: 5.2vw 4.28vw 6.07vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${sizeVariable}) {
    padding: 12.37vw 8.25vw 16.89vw 11vw;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  }
`;

const StyledLine = styled.div`
  margin-bottom: 2.5vw;
  display: grid;
  grid-template-columns: 38% 40% 20%;
  gap: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${sizeVariable}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledMain = styled.div`
  grid-column: 2 / 3;
  width: 100%;
`;

const StyledTitle = styled(SectionTitle)`
  grid-column: 1 / 2;
  width: 100%;
  text-align: left;
  padding-bottom: 1.89vw;
  margin-bottom: 3.89vw;
  font-size: 3.47vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -1px;
  border-bottom: 2px solid ${lightBlackColor};

  @media (max-width: ${sizeVariable}) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  color: ${blackColor};
  font-size: calc(40vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: ${sizeVariable}) {
    margin: 9.82vw 0 0 0;
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
  }
`;

const StyledMainText = styled.p`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: ${darkGreenColor};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(35vw / 5.08);
    letter-spacing: -0.7px;
    margin: 5.1vw 0 3.1vw;
  }
`;

const StyledSpan = styled.p`
  ${resetMarginsAndPaddings};
  color: ${blackColor};
  ${fontFamily};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin: 1vw 0;
    width: 80%;
    font-size: calc(20vw / 5.08);
  }
`;

//Components
export const Fees = () => {
  const isMobile = useMobileDetection();
  return (
    <StyledFees>
      <StyledTitle color={lightBlackColor}>{fees.title}</StyledTitle>
      <StyledLine>
        <StyledSubtitle>{fees.lineOne.title}</StyledSubtitle>
        <StyledMain>
          <StyledMainText>{fees.lineOne.text.main}</StyledMainText>
          {fees.lineOne.text.span && (
            <StyledSpan>{fees.lineOne.text.span}</StyledSpan>
          )}
        </StyledMain>
        {!isMobile && <FeesButton text={fees.lineOne.text.button}/>}
      </StyledLine>
      <StyledLine>
        <StyledSubtitle>{fees.lineTwo.title}</StyledSubtitle>
        <StyledMain>
          <StyledMainText>{fees.lineTwo.text.main}</StyledMainText>
        </StyledMain>
        {isMobile && <FeesButton text={fees.lineOne.text.button}/>}
      </StyledLine>
    </StyledFees>
  );
};

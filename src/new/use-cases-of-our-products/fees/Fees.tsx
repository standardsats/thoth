import styled from "styled-components";
import {
  colorVariables,
  divWithImage,
  fontFamily,
  resetMarginsAndPaddings,
} from "../../../assets/styles/commonStyles.ts";
import { CustomButton } from "../../common/button/Button.tsx";
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

const { lightBlackColor, blackColor, darkGreenColor } = colorVariables;

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

const StyledFees = styled.div`
  margin: 5.2vw auto 6.07vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94%;

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledMain = styled.div`
  grid-column: 2 / 3;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  grid-column: 3 / 4;
  width: 100%;
  display: flex;
  justify-content: end;
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
  border-bottom: 2px solid ${colorVariables.lightBlackColor};

  @media (max-width: 1400px) {
    padding-bottom: 5.09vw;
    margin: 0;
    font-size: 9.8vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1px;
  }
`;

const StyledSubtitle = styled.h3`
  ${resetMarginsAndPaddings};
  color: ${blackColor};
  ${fontFamily};
  font-size: calc(40vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
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

  @media (max-width: 1400px) {
    margin: 1vw 0;
    width: 80%;
    font-size: calc(20vw / 5.08);
  }
`;

const StyledButton = styled(CustomButton)`
  border-radius: 0;

  @media (max-width: 1400px) {
    margin-top: 10.8vw;
    width: 100%;
  }
`;

const StyledButtonContent = styled.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`;

const StyledCheckText = styled.span`
  margin-right: 1.29vw;
  color: ${colorVariables.whiteColor};
  font-size: 1.11vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: 1400px) {
    margin-right: 6.5vw;
    font-size: 3.15vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 1.04vw;
  height: 1.18vw;
  background-image: url("/src/assets/images/common/play-icon.svg");

  @media (max-width: 1400px) {
    width: 3.34vw;
    height: 2.95vw;
  }
`;

const CheckButtonHandler = () => {
  //TODO актуализировть событие
  console.log("Press check pricing details");
};

const ContentCheckButton = (
  <StyledButtonContent>
    <StyledCheckText>{fees.lineOne.text.button}</StyledCheckText>
    <StyledIcon />
  </StyledButtonContent>
);

const Button = () => (
  <StyledButtonWrapper>
    <StyledButton
      type={"button"}
      children={ContentCheckButton}
      onClick={CheckButtonHandler}
    />
  </StyledButtonWrapper>
);

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
        {!isMobile && <Button />}
      </StyledLine>
      <StyledLine>
        <StyledSubtitle>{fees.lineTwo.title}</StyledSubtitle>
        <StyledMain>
          <StyledMainText>{fees.lineTwo.text.main}</StyledMainText>
        </StyledMain>
        {isMobile && <Button />}
      </StyledLine>
    </StyledFees>
  );
};

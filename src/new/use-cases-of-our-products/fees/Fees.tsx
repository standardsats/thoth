import styled from "styled-components";
import { Subtitle } from "../../subtitle/Subtitle.tsx";
import { CustomText } from "../../text/Text.tsx";
import {
  colorVariables,
  divWithImage,
  fontFamily,
} from "../../../assets/styles/commonStyles.ts";
import { CustomButton } from "../../common/button/Button.tsx";

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
`;

const StyledLine = styled.div`
  margin-bottom: 2.5vw;
  display: grid;
  grid-template-columns: 38% 40% 20%;
  gap: 1vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
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

const StyledSubtitle = styled(Subtitle)`
  grid-column: 1 / 2;
  width: 100%;
  text-align: left;
  padding-bottom: 1.89vw;
  font-size: 3.47vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -1px;
  border-bottom: 2px solid ${colorVariables.lightBlackColor};

  ${({ $margin }) => `
    margin: ${$margin};
  `}
`;

const StyledTexType = styled(CustomText)`
  font-weight: 500;

  ${({ $lineheight, $margin, fontSize, $textalign, $letter }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign};
    letter-spacing: ${$letter};
  `}
`;

const StyledMainText = styled(CustomText)`
  font-weight: 400;

  ${({ $lineheight, $margin, fontSize, $textalign, $letter }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign};
    letter-spacing: ${$letter};
  `}
`;

const StyledButton = styled(CustomButton)`
  border-radius: 0;
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
    font-size: 3.15vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 1.04vw;
  height: 1.18vw;
  background-image: url("/src/assets/images/common/play-icon.svg");

  @media (max-width: 1400px) {
    width: 3.35vw;
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

export const Fees = () => {
  return (
    <StyledFees>
      <StyledSubtitle
        $margin={"0 0 3.89vw"}
        color={colorVariables.lightBlackColor}
      >
        {fees.title}
      </StyledSubtitle>
      <StyledLine>
        <StyledTexType
          color={colorVariables.blackColor}
          $margin={"0"}
          fontSize={"2.78vw"}
          $lineheight={"1.2"}
          $letter={"normal"}
          $textalign={"left"}
        >
          {fees.lineOne.title}
        </StyledTexType>
        <StyledMain>
          <StyledMainText
            color={colorVariables.darkGreenColor}
            $margin={"0"}
            fontSize={"2.78vw"}
            $lineheight={"1.2"}
            $letter={"normal"}
            $textalign={"left"}
          >
            {fees.lineOne.text.main}
          </StyledMainText>
          {fees.lineOne.text.span && (
            <StyledMainText
              color={colorVariables.blackColor}
              $margin={"1vw 0"}
              fontSize={"1.28vw"}
              $lineheight={"1.2"}
              $letter={"normal"}
              $textalign={"left"}
            >
              {fees.lineOne.text.span}
            </StyledMainText>
          )}
        </StyledMain>
        <StyledButtonWrapper>
          <StyledButton
            type={"button"}
            children={ContentCheckButton}
            onClick={CheckButtonHandler}
          />
        </StyledButtonWrapper>
      </StyledLine>
      <StyledLine>
        <StyledTexType
          color={colorVariables.blackColor}
          $margin={"0"}
          fontSize={"2.78vw"}
          $lineheight={"1.2"}
          $letter={"normal"}
          $textalign={"left"}
        >
          {fees.lineTwo.title}
        </StyledTexType>
        <StyledMain>
          <StyledMainText
            color={colorVariables.darkGreenColor}
            $margin={"0"}
            fontSize={"2.78vw"}
            $lineheight={"1.2"}
            $letter={"normal"}
            $textalign={"left"}
          >
            {fees.lineTwo.text.main}
          </StyledMainText>
        </StyledMain>
      </StyledLine>
    </StyledFees>
  );
};

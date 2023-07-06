import styled from "styled-components";
import { Subtitle } from "../../subtitle/Subtitle.tsx";
import { CustomText } from "../../text/Text.tsx";
import { ReactNode } from "react";
import { Title } from "../../title/Title.tsx";
import { colorVariables } from "../../../assets/styles/commonStyles.ts";

type Fees = {
  title: string;
  lineOne: {
    title: string;
    text: {
      main: string;
      span: string;
      button: string;
    };
    lineTwo: {
      title: string;
      text: {
        main: string;
      };
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
    lineTwo: {
      title: "Incoming Transactions",
      text: {
        main: "Free of charge",
      },
    },
  },
};

const StyledFees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  //@media (max-width: 1400px) {
  // 
  //}
`;


const StyledFee = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  // Дополнительные стили для блока Fees
`;

const StyledTitle = styled.h3`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const StyledMain = styled.p`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const StyledSpan = styled.p`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const StyledButton = styled.button`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
`;

export const Fees = () => {
  return (
    <StyledFees>
      <Subtitle color={colorVariables.whiteColor}>
        {fees.title}
      </Subtitle>
      <StyledFee>
        <StyledTitle>{fees.lineOne.title}</StyledTitle>
        <StyledMain>{fees.lineOne.text.main}</StyledMain>
        {fees.lineOne.text.span && <StyledSpan>{fees.lineOne.text.span}</StyledSpan>}
        <StyledButton>{fees.lineOne.text.button}</StyledButton>
      </StyledFee>
      <StyledFee>
        <StyledTitle>{fees.lineTwo.title}</StyledTitle>
        <StyledMain>{fees.lineTwo.text.main}</StyledMain>
      </StyledFee>
    </StyledFees>
  );
};
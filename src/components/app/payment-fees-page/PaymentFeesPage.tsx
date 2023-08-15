import { forwardRef } from "react";
import styled from "styled-components";
import { Navigation } from "./navigation/Navigation.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { Rates } from "./rates/Rates.tsx";
import {
  enterpriseHref,
  individualHref,
} from "@/assets/links-href/LinksHref.ts";

const { lightBlackColor } = colorVariables;

//Data
const paymentFeesPage = {
  title: "Payment fees",
  individual: {
    subtitle: "Individual",
    linkHref: individualHref,
    linkLabel: "Read more",
    depositFee: {
      text: "Deposit Fee",
      percent: ["0.1%", "0.3%"],
      span: ["<1000$", ">1000$"],
    },
    swapFee: {
      text: "Swap Fee",
      percent: ["0.5%"],
    },
    withdrawFee: {
      text: "Withdraw Fee",
      percent: ["0.5%"],
    },
    fiatBankIn: {
      text: "Fiat Bank In",
      percent: ["0.5%"],
    },
    fiatBankOut: {
      text: "Fiat Bank Out",
      percent: ["0.5%"],
    },
    depositFeeSpan: {
      text: "Deposit Fee Span",
      percent: ["0.5%"],
    },
  },
  enterprise: {
    subtitle: "Enterprise",
    linkHref: enterpriseHref,
    linkLabel: "Read more",
    depositFee: {
      text: "Deposit Fee",
      percent: ["0.1%"],
    },
    swapFee: {
      text: "Swap Fee",
      percent: ["0.5%", "0.6%"],
      span: ["<1000$", ">1000$"],
    },
    withdrawFee: {
      text: "Withdraw Fee",
      percent: ["0.5%"],
    },
    fiatBankIn: {
      text: "Fiat Bank In",
      percent: ["0.5%"],
    },
    fiatBankOut: {
      text: "Fiat Bank Out",
      percent: ["0.5%"],
    },
    depositFeeSpan: {
      text: "Deposit Fee Span",
      percent: ["0.5%"],
    },
  },
};

//Styles
const StyledPage = styled.main`
  width: 100vw;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTitle = styled(SectionTitle)`
  margin: 3.33vw 5.4vw 4.51vw;
  text-align: start;

  @media (max-width: ${sizeVariable}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`;

//Components
export const PaymentFeesPage = forwardRef<HTMLElement>((_, ref) => {
  return (
    <StyledPage ref={ref}>
      <Navigation />
      <StyledWrapper>
        <StyledTitle color={lightBlackColor}>
          {paymentFeesPage.title}
        </StyledTitle>
        <StyledContainer>
          <Rates rates={paymentFeesPage.individual} />
          <Rates rates={paymentFeesPage.enterprise} />
        </StyledContainer>
      </StyledWrapper>
    </StyledPage>
  );
});

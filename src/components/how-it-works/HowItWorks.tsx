import styled from "styled-components";
import {
  divWithBackground,
  colorVariables,
  divWithImage,
  commonBackgroundMixin,
  sizeVariable,
  StepSvgMixin,
  StyledLinesMixin,
} from "@/assets/styles/commonStyles.ts";
import { Step } from "@/components/how-it-works/step/Step.tsx";
import { Advantages } from "@/components/how-it-works/advantages/Advantages.tsx";
import { SectionTitle } from "@/components/common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "@/components/common/descriptionTHOH/descriptionTHOH.tsx";

const { darkGrayColor } = colorVariables;

// Data
const sectionHowItWork = {
  title: "How it work",
  text: '"Brief description of how the app works"',
  stepOne: {
    subtitle: "Send invoice",
    text: "Merchant issues an invoice in their local currency",
  },
  stepTwo: {
    subtitle: "Payment",
    text: "The user pays in the currency in which it is convenient for him. We take care of all the difficulties with overpayments and underpayments.",
  },
  stepThree: {
    subtitle: "Broadcast",
    text: "Conversion and withdrawal, the merchant at any time withdraws his funds to his wallet in the currency in which he is comfortable.",
  },
  advantages: [
    {
      index: "1",
      subtitle: "EU Regulated",
      text: "is fully regulated underEstionian License.",
      image: "images/how-it-works/advantages/advantages-first-icon.svg",
    },
    {
      index: "2",
      subtitle: "All types of crypto",
      text: "Coins, StableCoins, Tokens are supported.",
      image: "images/how-it-works/advantages/advantages-second-icon.svg",
    },
    {
      index: "3",
      subtitle: "Major Blockchains",
      text: "Bitcoin, Ethereum, Solana, BinanceSmart Chain, Ripple, etc.",
      image: "images/how-it-works/advantages/advantages-third-icon.svg",
    },
    {
      index: "4",
      subtitle: "Free of Charge",
      text: "All outgoing transactions, transfers and payouts in crypto are free of charge.",
      image: "images/how-it-works/advantages/advantages-fourth-icon.svg",
    },
  ],
};

//Styles
const StyledSteps = styled.div`
  position: relative;
  margin: 0 auto 2vw;
  ${divWithBackground};
  width: 93.54vw;
  height: auto;
  background-image: url("images/how-it-works/steps-L.svg");

  @media (max-width: ${sizeVariable}) {
    padding-top: 16.7vw;
    width: 90.55vw;
    background-image: url("images/how-it-works/steps-S.svg");
  }
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 4.72vw;
  }
`;

const StyledStepsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledParent = styled.div`
  position: relative;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLineLeft = styled.div`
  ${StyledLinesMixin};
  background-image: url("images/how-it-works/left-line-L.svg");
  top: 4vw;
  left: 14.5vw;
  width: 20.83vw;
  height: 6.04vw;
  z-index: 888;

  @media (max-width: ${sizeVariable}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url("images/how-it-works/left-line-S.svg");
  }
`;

const StyledLineRight = styled.div`
  ${StyledLinesMixin};
  background-image: url("images/how-it-works/right-line-L.svg");
  top: 4vw;
  right: -15vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${sizeVariable}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url("images/how-it-works/right-line-S.svg");
  }
`;

const StyledSvgStepOne = styled.div`
  ${StepSvgMixin};
  margin-bottom: 2vw;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/send-invoice.svg");
  ${commonBackgroundMixin};
  background-size: 7.4vw 7.4vw;

  @media (max-width: ${sizeVariable}) {
    margin-top: 2vw;
    width: 20.86vw;
    height: 20.86vw;
    background-image: url("images/how-it-works/send-invoice.svg");
    ${divWithImage}
  }
`;

const StyledSvgStepTwo = styled.div`
  ${StepSvgMixin};
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/payment.jpg");
  ${commonBackgroundMixin};
  background-size: 8.6vw 8.6vw;

  @media (max-width: ${sizeVariable}) {
    margin-top: 4vw;
    width: 24.56vw;
    height: 24.56vw;
    background-image: url("images/how-it-works/payment.jpg");
    ${divWithImage};
  }
}
`;

const StyledSvgStepThree = styled.div`
  ${StepSvgMixin};
  top: 0;
  left: 0;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("images/how-it-works/brodcast.jpg");
  ${divWithImage};

  @media (max-width: ${sizeVariable}) {
    margin: 4vw 0 4vw;
    width: 32.08vw;
    height: 32.08vw;
    background-image: url("images/how-it-works/brodcast.jpg");
  }
`;

//Component
export const HowItWorks = () => {
  return (
    <>
      <StyledSteps>
        <SectionTitle color={darkGrayColor}>
          {sectionHowItWork.title}
        </SectionTitle>
        <StyledDescriptionTHOH color={darkGrayColor}>
          {sectionHowItWork.text}
        </StyledDescriptionTHOH>
        <StyledStepsWrapper>
          <StyledParent>
            <StyledLineLeft />
            <Step
              svg={<StyledSvgStepOne />}
              subtitle={sectionHowItWork.stepOne.subtitle}
              text={sectionHowItWork.stepOne.text}
            />
          </StyledParent>
          <StyledParent>
            <StyledLineRight />
            <Step
              svg={<StyledSvgStepTwo />}
              subtitle={sectionHowItWork.stepTwo.subtitle}
              text={sectionHowItWork.stepTwo.text}
            />
          </StyledParent>
          <Step
            svg={<StyledSvgStepThree />}
            subtitle={sectionHowItWork.stepThree.subtitle}
            text={sectionHowItWork.stepThree.text}
          />
        </StyledStepsWrapper>
      </StyledSteps>
      <Advantages advantages={sectionHowItWork.advantages} />
    </>
  );
};

import styled from "styled-components";
import {
  divWithBackground,
  colorVariables,
  sizeVariable,
  StyledLinesMixin,
} from "@/assets/styles/commonStyles.ts";
import { Step } from "./step/Step.tsx";
import { Advantages } from "./advantages/Advantages.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "@/components/app/common/descriptionTHOH/descriptionTHOH.tsx";
import { FC } from "react";
import {
  advantageImage,
  howItWorksImages,
} from "@/assets/constants/constants.ts";

const { darkGrayColor } = colorVariables;

// Types
type Props = {
  id: string;
};

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
      image: advantageImage.one.image,
      alt: advantageImage.one.alt,
    },
    {
      index: "2",
      subtitle: "All types of crypto",
      text: "Coins, StableCoins, Tokens are supported.",
      image: advantageImage.two.image,
      alt: advantageImage.two.alt,
    },
    {
      index: "3",
      subtitle: "Major Blockchains",
      text: "Bitcoin, Ethereum, Solana, BinanceSmart Chain, Ripple, etc.",
      image: advantageImage.three.image,
      alt: advantageImage.three.alt,
    },
    {
      index: "4",
      subtitle: "Free of Charge",
      text: "All outgoing transactions, transfers and payouts in crypto are free of charge.",
      image: advantageImage.four.image,
      alt: advantageImage.four.alt,
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
  background-image: url(${howItWorksImages.backgroundL});

  @media (max-width: ${sizeVariable}) {
    padding: 16.7vw 0 5vw;
    width: 90.55vw;
    background-image: url(${howItWorksImages.backgroundS});
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
  background-image: url(${howItWorksImages.leftLineL});
  top: 4vw;
  left: 15vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: ${sizeVariable}) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url(${howItWorksImages.leftLineS});
  }
`;

const StyledLineRight = styled.div`
  ${StyledLinesMixin};
  background-image: url(${howItWorksImages.rightLineL});
  top: 4vw;
  right: -14.5vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: ${sizeVariable}) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url(${howItWorksImages.rightLineS});
  }
`;

//Component
export const HowItWorks: FC<Props> = ({ id }) => {
  return (
    <section id={id}>
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
              index="one"
              image={howItWorksImages.stepOne}
              content={sectionHowItWork.stepOne}
            />
          </StyledParent>
          <StyledParent>
            <StyledLineRight />
            <Step
              index="two"
              image={howItWorksImages.stepTwo}
              content={sectionHowItWork.stepTwo}
            />
          </StyledParent>
          <Step
            index="three"
            image={howItWorksImages.stepThree}
            content={sectionHowItWork.stepThree}
          />
        </StyledStepsWrapper>
      </StyledSteps>
      <Advantages advantages={sectionHowItWork.advantages} />
    </section>
  );
};

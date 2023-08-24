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
import { getData } from "@/assets/constants/constants.ts";
import { useTranslation } from "react-i18next";
import {
  howItWorksImages,
  HowItWorksType,
} from "@/assets/constants/app/main-page/HowItWorks.ts";

const { darkGrayColor } = colorVariables;

// Types
type Props = {
  id: string;
  title: string;
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
export const HowItWorks: FC<Props> = ({ id, title }) => {
  const { t } = useTranslation();
  const sectionData = getData("HowItWorks", t) as HowItWorksType;

  const { text, stepOne, stepTwo, stepThree, advantages } = sectionData;

  return (
    <section id={id}>
      <StyledSteps>
        <SectionTitle color={darkGrayColor}>{title}</SectionTitle>
        <StyledDescriptionTHOH color={darkGrayColor}>
          {text}
        </StyledDescriptionTHOH>
        <StyledStepsWrapper>
          <StyledParent>
            <StyledLineLeft />
            <Step index="one" content={stepOne} />
          </StyledParent>
          <StyledParent>
            <StyledLineRight />
            <Step index="two" content={stepTwo} />
          </StyledParent>
          <Step index="three" content={stepThree} />
        </StyledStepsWrapper>
      </StyledSteps>
      {advantages && <Advantages advantages={advantages} />}
    </section>
  );
};

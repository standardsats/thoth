import styled, { css } from "styled-components";
import {
  divWithBackground,
  colorVariables,
  divWithImage,
  commonBackgroundMixin,
} from "../../assets/styles/commonStyles.ts";
import { sectionHowItWork } from "../../assets/constants/constants.ts";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { Step } from "./step/Step.tsx";
import { Advantages } from "../advantages/Advantages.tsx";
import { SectionTitle } from "../section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "../descriptionTHOH/descriptionTHOH.tsx";

const StyledSteps = styled.div`
  position: relative;
  margin: 0 auto 2vw;
  ${divWithBackground};
  width: 93.54vw;
  height: auto;
  background-image: url("/src/assets/images/how-it-works/steps-left-L.svg");

  @media (max-width: 1400px) {
    padding-top: 16.7vw;
    width: 90.55vw;
    background-image: url("/src/assets/images/how-it-works/steps-S.svg");
  }
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 0.7vw 0 1.71vw;

  @media (max-width: 1400px) {
    margin-bottom: 4.72vw;
  }
`;

const StyledStepsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledParent = styled.div`
  position: relative;

  @media (max-width: 1400px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLinesMixin = css`
  position: absolute;
  background-repeat: no-repeat;
  z-index: 999;

  @media (max-width: 1400px) {
    width: 45vw;
    background-size: auto 100%;
    background-position: center;
  }
`;

const StyledLineLeft = styled.div`
  ${StyledLinesMixin};
  background-image: url("/src/assets/images/how-it-works/left-line-L.svg");
  top: 4vw;
  left: 14.5vw;
  width: 20.83vw;
  height: 6.04vw;

  @media (max-width: 1400px) {
    top: 25vw;
    left: 7vw;
    height: calc(100% - 20.86vw + 15vw);
    background-image: url("/src/assets/images/how-it-works/left-line-S.svg");
  }
`;

const StyledLineRight = styled.div`
  ${StyledLinesMixin};
  background-image: url("/src/assets/images/how-it-works/right-line-L.svg");
  top: 4vw;
  right: -15vw;
  width: 19vw;
  height: 6.04vw;

  @media (max-width: 1400px) {
    top: 30vw;
    right: 3vw;
    height: calc(100% - 24.56vw + 15vw);
    background-image: url("/src/assets/images/how-it-works/right-line-S.svg");
  }
`;

const StepSvgMixin = css`
  margin-bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSvgStepOne = styled.div`
  ${StepSvgMixin};
  margin-bottom: 2vw;
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("/src/assets/images/how-it-works/send-invoice.svg");
  ${commonBackgroundMixin};
  background-size: 7.4vw 7.4vw;

  @media (max-width: 1400px) {
    margin-top: 2vw;
    width: 20.86vw;
    height: 20.86vw;
    background-image: url("/src/assets/images/how-it-works/send-invoice.svg");
    ${divWithImage}
  }
`;

const StyledSvgStepTwo = styled.div`
  ${StepSvgMixin};
  width: 11.3vw;
  height: 11.3vw;
  background-image: url("/src/assets/images/how-it-works/payment.jpg");
  ${commonBackgroundMixin};
  background-size: 8.6vw 8.6vw;

  @media (max-width: 1400px) {
    margin-top: 4vw;
    width: 24.56vw;
    height: 24.56vw;
    background-image: url("/src/assets/images/how-it-works/payment.jpg");
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
  background-image: url("/src/assets/images/how-it-works/brodcast.jpg");
  ${divWithImage};

  @media (max-width: 1400px) {
    margin: 4vw 0 4vw;
    width: 32.08vw;
    height: 32.08vw;
    background-image: url("/src/assets/images/how-it-works/brodcast.jpg");
  }
`;

export const HowItWorks = () => {
  const isMobile = useMobileDetection();
  const { darkGrayColor, lightBlackColor } = colorVariables;
  const textMarginStep = isMobile ? "0.7vw 0 4.72vw" : "1.11vw 0 2.85vw";
  const subtitleMarginStep = isMobile ? "5vw 0 0 0" : "0";

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
              color={lightBlackColor}
              textMargin={textMarginStep}
              subtitleMargin={subtitleMarginStep}
            />
          </StyledParent>
          <StyledParent>
            <StyledLineRight />
            <Step
              svg={<StyledSvgStepTwo />}
              subtitle={sectionHowItWork.stepTwo.subtitle}
              text={sectionHowItWork.stepTwo.text}
              color={lightBlackColor}
              textMargin={textMarginStep}
              subtitleMargin={subtitleMarginStep}
            />
          </StyledParent>
          <Step
            svg={<StyledSvgStepThree />}
            subtitle={sectionHowItWork.stepThree.subtitle}
            text={sectionHowItWork.stepThree.text}
            color={lightBlackColor}
            textMargin={textMarginStep}
            subtitleMargin={subtitleMarginStep}
          />
        </StyledStepsWrapper>
      </StyledSteps>
      <Advantages />
    </>
  );
};

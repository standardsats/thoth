import styled from "styled-components";
import { Advantage } from "./adventage/Advantage.tsx";
import { advantages } from "../../assets/constants/constants.ts";
import { coverImage, divWithImage } from "../../assets/styles/commonStyles.ts";

const StyledAdvantages = styled.div`
  ${coverImage};
  min-height: 25.14vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("/src/assets/images/advantages/advantages-L.svg");

  @media (max-width: 1400px) {
    min-height: 212.58vw;
    background-image: url("/src/assets/images/advantages/advantages-S.svg");
    flex-direction: column;
  }
`;

const StyledSvg = styled.div`
  ${divWithImage};
  margin-right: 1vw;

  @media (max-width: 1400px) {
    margin-right: 5vw;
  }
`;

const StyledSvgOne = styled(StyledSvg)`
  width: 2.85vw;
  height: 3.19vw;
  background-image: url("/src/assets/images/advantages/advantages-first-icon.svg");

  @media (max-width: 1400px) {
    width: 11.22vw;
    height: 12.6vw;
  }
`;

const StyledSvgTwo = styled(StyledSvg)`
  width: 3.06vw;
  height: 3.6vw;
  background-image: url("/src/assets/images/advantages/advantages-second-icon.svg");

  @media (max-width: 1400px) {
    width: 12.16vw;
    height: 14.34vw;
  }
`;

const StyledSvgThree = styled(StyledSvg)`
  width: 3.54vw;
  height: 3.54vw;
  background-image: url("/src/assets/images/advantages/advantages-third-icon.svg");

  @media (max-width: 1400px) {
    width: 14.11vw;
    height: 14.03vw;
  }
`;

const StyledSvgFour = styled(StyledSvg)`
  width: 3.75vw;
  height: 3.75vw;
  background-image: url("/src/assets/images/advantages/advantages-fourth-icon.svg");

  @media (max-width: 1400px) {
    width: 16.93vw;
    height: 16.93vw;
  }
`;

export const Advantages = () => {
  return (
    <StyledAdvantages>
      <Advantage
        svg={<StyledSvgOne />}
        subtitle={advantages.one.subtitle}
        text={advantages.one.text}
        textMargin={"2.95vw 0 0 0"}
        subtitleMargin={"0vw"}
      />
      <Advantage
        svg={<StyledSvgTwo />}
        subtitle={advantages.two.subtitle}
        text={advantages.two.text}
        textMargin={"2.95vw 0 0 0"}
        subtitleMargin={"0vw"}
      />
      <Advantage
        svg={<StyledSvgThree />}
        subtitle={advantages.three.subtitle}
        text={advantages.three.text}
        textMargin={"2.95vw 0 0 0"}
        subtitleMargin={"0vw"}
      />
      <Advantage
        svg={<StyledSvgFour />}
        subtitle={advantages.four.subtitle}
        text={advantages.four.text}
        textMargin={"2.95vw 0 0 0"}
        subtitleMargin={"0vw"}
      />
    </StyledAdvantages>
  );
};

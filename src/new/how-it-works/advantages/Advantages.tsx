import styled from "styled-components";
import { FC } from "react";
import { Advantage } from "./adventage/Advantage.tsx";
import {
  divWithImage,
  sizeVariable,
} from "../../../assets/styles/commonStyles.ts";

// Types
type Advantage = {
  index: string;
  subtitle: string;
  text: string;
  image: string;
};

type AdvantagesProps = {
  advantages: Advantage[];
};

//Styles
const StyledAdvantages = styled.div`
  ${divWithImage};
  height: 25.14vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("/src/assets/images/how-it-works/advantages/advantages-L.svg");

  @media (max-width: ${sizeVariable}) {
    min-height: 212.58vw;
    background-image: url("/src/assets/images/how-it-works/advantages/advantages-S.svg");
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledSvg = styled.div<{ $image: string }>`
  ${divWithImage};
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;
  background-image: url(${({ $image }) => $image});

  @media (max-width: ${sizeVariable}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`;

export const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <StyledAdvantages>
      <StyledWrapper>
        {advantages.map((advantage) => (
          <Advantage
            key={advantage.index}
            svg={<StyledSvg $image={advantage.image} />}
            subtitle={advantage.subtitle}
            text={advantage.text}
          />
        ))}
      </StyledWrapper>
    </StyledAdvantages>
  );
};

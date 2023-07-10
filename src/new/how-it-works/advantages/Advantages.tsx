import styled from "styled-components";
import { FC } from "react";
import { Advantage } from "./adventage/Advantage.tsx";
import { divWithImage } from "../../../assets/styles/commonStyles.ts";

// Types
type AdvantagesProps = {
  advantages: Array<{
    subtitle: string;
    text: string;
    image: string;
  }>;
};

const StyledAdvantages = styled.div`
  ${divWithImage};
  height: 25.14vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url("/src/assets/images/how-it-works/advantages/advantages-L.svg");

  @media (max-width: 1400px) {
    min-height: 212.58vw;
    background-image: url("/src/assets/images/how-it-works/advantages/advantages-S.svg");
    flex-direction: column;
  }
`;

const StyledSvg = styled.div<{ backgroundImage: string }>`
  ${divWithImage};
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;
  background-image: url(${({ backgroundImage }) => backgroundImage});

  @media (max-width: 1400px) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`;

export const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <StyledAdvantages>
      {advantages.map((advantage, index) => (
        <Advantage
          key={index}
          svg={<StyledSvg backgroundImage={advantage.image} />}
          subtitle={advantage.subtitle}
          text={advantage.text}
          textMargin={"2.95vw 0 0 0"}
          subtitleMargin={"0vw"}
        />
      ))}
    </StyledAdvantages>
  );
};

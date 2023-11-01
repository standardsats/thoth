import styled from "styled-components";
import { FC } from "react";
import { Advantage } from "./adventage/Advantage.tsx";
import { coverImage, sizeVariable } from "@/assets/styles/commonStyles.ts";
import {
  AdvantageData,
  howItWorksImages,
} from "@/assets/constants/app/main-page/HowItWorks.ts";

//Types
type AdvantagesProps = {
  advantages: AdvantageData[];
};

//Styles
const StyledAdvantages = styled.div`
  background-image: url(${howItWorksImages.advantages.backgroundL});
  //border-radius: 1.6vw;
  border-radius: 1.6vw 1.6vw 0 0;
  ${coverImage};
  min-height: 25.14vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizeVariable}) {
    width: 100vw;
    //border-radius: 3.93vw;
    border-radius: 3.93vw 3.93vw 0 0;
    min-height: 212.58vw;
    background-image: url(${howItWorksImages.advantages.backgroundS});
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  padding: 5vw 3vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  justify-items: center;

  @media (max-width: ${sizeVariable}) {
    padding: 5vw 0;
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

const StyledSvg = styled.img`
  width: 3.75vw;
  height: 3.75vw;
  margin-right: 1vw;

  @media (max-width: ${sizeVariable}) {
    margin-right: 5vw;
    width: 13.95vw;
    height: 13.95vw;
  }
`;

// Component
export const Advantages: FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <StyledAdvantages>
      <StyledWrapper>
        {advantages.map((advantage) => (
          <Advantage
            key={advantage.id}
            svg={<StyledSvg src={advantage.image} alt={advantage.alt} />}
            subtitle={advantage.subtitle}
            text={advantage.text}
          />
        ))}
      </StyledWrapper>
    </StyledAdvantages>
  );
};

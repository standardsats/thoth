import styled from "styled-components";
import { FC } from "react";
import { Advantage } from "./adventage/Advantage.tsx";
import { coverImage, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { advantagesImages } from "@/assets/constants/constants.ts";

//Types
type Advantage = {
  index: string;
  subtitle: string;
  text: string;
  image: string;
  alt: string;
};

type Props = {
  advantages: Advantage[];
};

//Styles
const StyledAdvantages = styled.div`
  background-image: url(${advantagesImages.backgroundL});
  border-radius: 1.6vw;
  ${coverImage};
  min-height: 25.14vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizeVariable}) {
    width: 100vw;
    border-radius: 3.93vw;
    min-height: 212.58vw;
    background-image: url(${advantagesImages.backgroundS});
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
export const Advantages: FC<Props> = ({ advantages }) => {
  return (
    <StyledAdvantages>
      <StyledWrapper>
        {advantages.map((advantage) => (
          <Advantage
            key={advantage.index}
            svg={<StyledSvg src={advantage.image} alt={advantage.alt} />}
            subtitle={advantage.subtitle}
            text={advantage.text}
          />
        ))}
      </StyledWrapper>
    </StyledAdvantages>
  );
};

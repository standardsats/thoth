import styled from "styled-components";
import { Subtitle } from "../../subtitle/Subtitle.tsx";
import { CustomText } from "../../text/Text.tsx";
import { ReactNode } from "react";

const StyledStep = styled.div`
  position: relative;
  z-index: 1;
  max-width: 19.16vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
    max-width: 54.33vw;
  }
  // TODO
  //&:nth-child(2) {
  //  max-width: 23.19vw;
  //
  //  @media (max-width: 1400px) {
  //    max-width: 65.75vw;
  //  }
  //}
`;

interface StepProps {
  subtitle: string;
  text: string;
  color: string;
  textMargin: string;
  subtitleMargin: string;
  svg: ReactNode;
}

export const Step: React.FC<StepProps> = ({
  subtitle,
  text,
  color,
  textMargin,
  subtitleMargin,
  svg,
}) => {
  return (
    <StyledStep>
      {svg}
      <Subtitle color={color} $margin={subtitleMargin}>
        {subtitle}
      </Subtitle>
      <CustomText color={color} $margin={textMargin}>
        {text}
      </CustomText>
    </StyledStep>
  );
};

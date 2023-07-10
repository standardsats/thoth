import styled from "styled-components";
import { Subtitle } from "../../../common/subtitle/Subtitle.tsx";
import { CustomText } from "../../../common/text/Text.tsx";
import { ReactNode } from "react";
import { colorVariables } from "../../../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../../../hooks/useMobileDetection.tsx";

const StyledAdvantageContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 19%;
  border-bottom: none;

  @media (max-width: 1400px) {
    padding: 10.5vw 3.5vw;
    max-width: 80.3vw;
    border-bottom: 0.5px ${colorVariables.whiteColor} solid;
  }

  &:last-child {
    border: none;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 3.56vw;
  display: flex;
  flex-direction: row;
  align-items: center; /* Добавлено выравнивание по вертикали */

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const CenteredSubtitle = styled(Subtitle)`
  align-self: center;
`;

interface StepProps {
  subtitle: string;
  text: string;
  textMargin: string;
  subtitleMargin: string;
  svg: ReactNode;
}

export const Advantage: React.FC<StepProps> = ({
  subtitle,
  text,
  textMargin,
  subtitleMargin,
  svg,
}) => {
  const { whiteColor } = colorVariables;
  const isMobile = useMobileDetection();

  const fontSizeCenteredSubtitle = isMobile ? "5.9vw" : "1.81vw";
  const fontSizeCustomText = isMobile ? "4.9vw" : "1.39vw";
  const lineHeightCustomText = isMobile ? "1" : "1.25";

  return (
    <StyledAdvantageContainer>
      <StyledWrapper>
        {svg}
        <CenteredSubtitle
          color={whiteColor}
          fontSize={fontSizeCenteredSubtitle}
          $lineheight={"0.83"}
          $margin={subtitleMargin}
        >
          {subtitle}
        </CenteredSubtitle>
      </StyledWrapper>
      <CustomText
        $textalign={"left"}
        fontSize={fontSizeCustomText}
        $lineheight={lineHeightCustomText}
        color={whiteColor}
        $margin={textMargin}
      >
        {text}
      </CustomText>
    </StyledAdvantageContainer>
  );
};

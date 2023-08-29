import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
import { FC } from "react";
import { QuestionsType } from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";

const { deepColor, darkGreenColor } = colorVariables;

//Type
type Props = {
  questions: QuestionsType;
};

//Styles
const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 10.9vw 4.28vw;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    padding: 12vw 8.01vw 19.1vw;
  }
`;

const StyledTitle = styled(SectionTitle)`
  padding: 3.13vw 0 1.8vw;
  align-self: start;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    padding: 0 0 7.28vw;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 31vw;

  @media (max-width: ${sizeVariable}) {
    min-width: 100%;
  }
`;

const StyledWrapper = styled.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 24vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    min-width: 100%;
  }
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  padding-bottom: 1vw;
  font-size: calc(25vw / 14.4);
  ${fontFamily};
  color: ${deepColor};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
    padding: 2.56vw 0 5.5vw;
  }

  &:first-child,
  &.custom-first {
    max-width: 32vw;
    @media (max-width: ${sizeVariable}) {
      width: 100%;
    }
  }

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.08);
  }
`;

const StyledImage = styled.img`
  width: auto;
  height: calc(58vw / 14.4);
  @media (max-width: ${sizeVariable}) {
    height: calc(58vw / 5.08);
    margin: 12vw 0 4.92vw;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  padding: 1.39vw 0 0.1vw 0;
  color: ${deepColor};
  font-size: calc(30vw / 14.4);
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(30vw / 5.08);
  }
`;

const StyledLink = styled(Link)`
  color: ${darkGreenColor};
  ${resetMarginsAndPaddings};
  ${fontFamily};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.08);
  }
`;

//Component
export const HaveAQuestion: FC<Props> = ({ questions }) => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle color={deepColor}>{questions.title}</StyledTitle>
        <StyledText className="custom-first">{questions.text}</StyledText>
      </StyledContainer>
      <StyledWrapper>
        <StyledContainer>
          <StyledImage
            src={questions.existing.image.src}
            alt={questions.existing.image.alt}
          />
          <StyledSubtitle>{questions.existing.title}</StyledSubtitle>
          <StyledText color={deepColor}>{questions.existing.text}</StyledText>
        </StyledContainer>
        <StyledLink
          href={questions.new.href}
          target="_blank"
          rel="noopener noreferrer"
          color={darkGreenColor}
        >
          {questions.existing.linkName}
        </StyledLink>
      </StyledWrapper>
      <StyledWrapper>
        <StyledContainer>
          <StyledImage
            src={questions.new.image.src}
            alt={questions.new.image.alt}
          />
          <StyledSubtitle>{questions.new.title}</StyledSubtitle>
          <StyledText color={deepColor}>{questions.new.text}</StyledText>
        </StyledContainer>
        <StyledLink
          href={questions.new.href}
          target="_blank"
          rel="noopener noreferrer"
          color={darkGreenColor}
        >
          {questions.new.linkName}
        </StyledLink>
      </StyledWrapper>
    </StyledSection>
  );
};

import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import {
  contactTeamHref,
  getSupportHref,
} from "@/assets/links-href/LinksHref.ts";
import { haveAQuestionImages } from "@/assets/constants/constants.ts";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";

const { deepColor, darkGreenColor } = colorVariables;

//Data
const questions = {
  title: "Have a question?",
  text: "Explore our solutions or you can contact us throughticket system and contact form. Feel free to get in touch..",
  existing: {
    title: "For existing clients",
    text: "If you already have an account please use our ticket system.",
    linkName: "Get 24\\7 Support",
  },
  new: {
    title: "For new clients or partners",
    text: "Please leave your inquiry and our Buisness Development Team will contact you shortly.",
    linkName: "Contact BD Team",
  },
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
  max-width: 31.94vw;

  @media (max-width: ${sizeVariable}) {
    min-width: 100%;
  }
`;

const StyledWrapper = styled.div`
  min-height: 25.69vw;
  display: flex;
  flex-direction: column;
  max-width: 31.94vw;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    min-width: 100%;
  }
`;

const StyledText = styled.p`
  width: 25vw;
  ${resetMarginsAndPaddings};
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
    width: 30.76vw;
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
export const HaveAQuestion = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle color={deepColor}>{questions.title}</StyledTitle>
        <StyledText className="custom-first">{questions.text}</StyledText>
      </StyledContainer>
      <StyledWrapper>
        <StyledContainer>
          <StyledImage
            src={haveAQuestionImages.existingClient.src}
            alt={haveAQuestionImages.existingClient.alt}
          />
          <StyledSubtitle>{questions.existing.title}</StyledSubtitle>
          <StyledText color={deepColor}>{questions.existing.text}</StyledText>
        </StyledContainer>
        <StyledLink
          href={getSupportHref}
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
            src={haveAQuestionImages.newClient.src}
            alt={haveAQuestionImages.newClient.alt}
          />
          <StyledSubtitle>{questions.new.title}</StyledSubtitle>
          <StyledText color={deepColor}>{questions.new.text}</StyledText>
        </StyledContainer>
        <StyledLink
          href={contactTeamHref}
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

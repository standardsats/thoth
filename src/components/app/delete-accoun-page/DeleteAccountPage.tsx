import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  fontFamilyMedium,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import ReactHtmlParser from "react-html-parser";
import { Navigation } from "@/components/app/common/navigation/Navigation.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { DeleteAccountPageData } from "@/assets/constants/app/delete-account-page/DeleteAccountPage.ts";

const { lightBlackColor, darkGreenColor, blackColor } = colorVariables;

//Styles
const StyledPage = styled.main`
  width: 100%;
  min-height: 90vh;
`;

const StyledTitle = styled(SectionTitle)`
  width: 100%;
  margin: 3.27vw 0 2.7vw;
  text-align: start;

  @media (max-width: ${sizeVariable}) {
    margin: 7.86vw 0 3.9vw;
  }
`;

const StyledDescription = styled.p`
  ${resetMarginsAndPaddings};
  padding-bottom: calc(20vw / 14.4);
  color: ${darkGreenColor};
  ${fontFamilyMedium};
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.09);
    padding-bottom: calc(10vw / 5.09);
    line-height: 2;
  }
`;

const StyledContainer = styled.div`
  margin: 0 4vw 0 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    margin: 0 2vw 0 5.4vw;
  }
`;

const StyledList = styled.ol`
  ${resetMarginsAndPaddings};
  padding-left: 2.5vw;

  @media (max-width: ${sizeVariable}) {
    padding-left: 4vw;
    margin-bottom: 25vw;
  }
`;

const StyledItem = styled.li`
  ${resetMarginsAndPaddings};
  padding: 0 0 0.8vw 2vw;
  color: ${blackColor};
  ${fontFamily};
  font-size: calc(30vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.09);
    padding: 0 0 0.8vw 0.5vw;
    line-height: 1.75;
  }
`;

export const DeleteAccountPage = () => {
  const { t } = useTranslation();
  const pageData = useMemo(
    () => getData("DeleteAccount", t),
    [t]
  ) as DeleteAccountPageData;
  const { navigation, title, description, steps } = pageData;

  return (
    <StyledPage>
      <Navigation navigation={navigation} />
      <StyledContainer>
        <StyledTitle color={lightBlackColor}>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledList>
          {steps.map((item) => (
            <StyledItem key={item.id}>{ReactHtmlParser(item.step)}</StyledItem>
          ))}
        </StyledList>
      </StyledContainer>
    </StyledPage>
  );
};

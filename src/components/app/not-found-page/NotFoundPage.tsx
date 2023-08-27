import { useNavigate } from "react-router-dom";
import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import styled from "styled-components";
import {
  colorVariables,
  fontFamilyBold,
  fontFamilyMedium,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { Navigation } from "@/components/app/common/navigation/Navigation.tsx";
import { NotFoundType } from "@/assets/constants/app/not-found-page/NotFoundPage.ts";
import { scrollTo } from "@/assets/functions/functions.ts";

const {
  darkGreenColor,
  lightBlackColor,
  notFoundColor,
  headerColor,
  whiteColor,
} = colorVariables;

//Styles
const StyledPage = styled.main`
  width: 100vw;
`;

const StyledWrapper = styled.div`
  padding: 3.5vw 0 7.15vw;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    padding: 15vw 0 25vw;
  }
`;

const StyledTitle = styled.h1`
  ${resetMarginsAndPaddings};
  ${fontFamilyBold};
  color: ${darkGreenColor};
  text-align: center;
  font-size: calc(150vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -3px;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(70vw / 5.09);
  }
`;

const StyledSubtitle = styled(SectionTitle)`
  font-size: calc(70vw / 14.4);
  letter-spacing: -1.4px;
  text-transform: capitalize;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(35vw / 5.09);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  padding-bottom: 2.99vw;
  ${fontFamilyMedium};
  color: ${notFoundColor};
  text-align: center;
  font-size: calc(25vw / 14.04);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-transform: lowercase;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }
`;

const StyledButton = styled(CustomButton)`
  ${resetMarginsAndPaddings};
  padding: 0.6vw 8.5vw;
  ${fontFamilyMedium};
  background-color: ${headerColor};
  color: ${whiteColor};
  text-align: center;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.6px;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.09);
  }
`;

//Component
export const NotFoundPage = forwardRef<HTMLElement>((_, ref) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const { t } = useTranslation();
  const pageData = getData("NotFound", t) as NotFoundType;

  const { navigation, title, subtitle, image, text, button } = pageData;

  const buttonHandler = () => {
    setIsDisabled(true);
    navigate("/");
    scrollTo(0);
  };

  return (
    <StyledPage ref={ref}>
      <Navigation navigation={navigation} />
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle color={lightBlackColor}>{subtitle}</StyledSubtitle>
        <StyledImage src={image.src} alt={image.alt} />
        <StyledText>{text}</StyledText>
        <StyledButton
          type={"button"}
          disabled={isDisabled}
          onClick={buttonHandler}
        >
          {button}
        </StyledButton>
      </StyledWrapper>
    </StyledPage>
  );
});

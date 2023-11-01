import styled, { css } from "styled-components";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import {
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { IconAndText } from "../../icon-and-text/IconAndText.tsx";
import {
  languages,
  CloseIconData,
  LanguageData,
  headerIcon,
} from "@/assets/constants/app/header/Header.ts";

//Type
type LanguageSwitcherProps = {
  language: LanguageData;
  isLanguagesOpen: null | boolean;
  languagesHandler: () => void;
  closeIcon: CloseIconData;
};

//Styles
const StyledWrapper = styled.div`
  margin-bottom: 1vw;
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 3vw;
  }
`;

const StyledCloseButton = styled(CustomButton)`
  background-color: transparent;
  width: 1.04vw;
  height: 0.83vw;
  display: flex;

  @media (max-width: ${sizeVariable}) {
    width: 2.95vw;
    height: 2.16vw;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContainer = styled.div`
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;

  @media (max-width: ${sizeVariable}) {
    padding: 12vw 5vw 15vw 5vw;
  }
`;

const StyledLanguageButton = styled(CustomButton)<{
  $code: string;
  $currentLanguage: string;
}>`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  text-align: left;
  margin: 1.95vw 0 0 1vw;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.18vw;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.51px;
  background: transparent;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(16vw / 5.08);
    margin: 4vw 0 0 2vw;
  }

  ${({ $code, $currentLanguage }) =>
    $code === $currentLanguage &&
    css`
      display: flex;
      align-items: center;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 18vw;
        transform: translateY(-50%);
        background-image: url(${headerIcon.checkMark});
        background-size: cover;
        width: 1.25vw;
        height: 1vw;

        @media (max-width: ${sizeVariable}) {
          width: 2.5vw;
          height: 2vw;
          left: 45vw;
        }
      }
    `}
`;

//Component
export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  language,
  isLanguagesOpen,
  languagesHandler,
  closeIcon,
}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = async (code: string) => {
    setCurrentLanguage(code);
    await i18n.changeLanguage(code);
    languagesHandler();
  };

  const createLanguageChangeHandler = (code: string) => async () => {
    await handleLanguageChange(code);
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledCloseButton
          disabled={!isLanguagesOpen}
          type="button"
          onClick={languagesHandler}
          aria-label={closeIcon.alt}
        >
          <StyledImage src={closeIcon.src} alt={closeIcon.alt} />
        </StyledCloseButton>
        <IconAndText image={language} />
      </StyledWrapper>
      {languages.map((lang) => (
        <StyledLanguageButton
          type="button"
          disabled={!isLanguagesOpen}
          key={lang.code}
          $code={lang.code}
          $currentLanguage={currentLanguage}
          onClick={createLanguageChangeHandler(lang.code)}
        >
          {lang.name}
        </StyledLanguageButton>
      ))}
    </StyledContainer>
  );
};

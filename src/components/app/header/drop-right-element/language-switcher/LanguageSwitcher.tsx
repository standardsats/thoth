import styled, { css } from "styled-components";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import {
  divWithImage,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { IconAndTextProps } from "../../icon-and-text/IconAndText.tsx";
import { checkMarkIcon } from "@/assets/constants/constants.ts";

const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "fr", name: "Français" },
];

//Type
type LanguageSwitcherProps = {
  language: string;
  isLanguagesOpen: null | boolean;
  languagesHandler: () => void;
  containerHeight: number;
  headerHeight: number;
};

//Styles
const StyledWrapper = styled.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const StyledCloseButton = styled(CustomButton)`
  ${divWithImage};
  background-color: transparent;
  width: 1.04vw;
  height: 0.83vw;
  border-radius: 0;
  background-image: url("images/header/close-icon.svg");

  @media (max-width: ${sizeVariable}) {
    width: 2.95vw;
    height: 2.16vw;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2.3vw 5vw 2.3vw 1.74vw;
  box-sizing: border-box;

  @media (max-width: ${sizeVariable}) {
    padding: 16.7vw 5vw 13vw 5vw;
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
        background-image: url(${checkMarkIcon.background});
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
        />
        <IconAndTextProps type="language" text={language} />
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

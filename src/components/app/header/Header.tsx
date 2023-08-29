import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { Logo } from "@/components/app/common/Logo/Logo.tsx";
import { FeedbackWidgets } from "@/components/app/common/feedback-widgets/FeedbackWidgets.tsx";
import { forwardRef } from "react";
import { LanguageSwitcher } from "./drop-right-element/language-switcher/LanguageSwitcher.tsx";
import { MobileMenu } from "./drop-right-element/mobile-menu/MobileMenu.tsx";
import { SignInAndSignUp } from "./sign-in-and-sign-up/SignInAndSignUp.tsx";
import { HeaderNavigation } from "./header-navigation/HeaderNavigation.tsx";
import { getData } from "@/assets/constants/constants.ts";
import { DropRightElement } from "./drop-right-element/DropRightElement.tsx";
import { useTranslation } from "react-i18next";
import { HeaderType } from "@/assets/constants/app/header/Header.ts";
import { SectionsType } from "@/assets/constants/app/App.ts";

const { whiteColor, headerColor } = colorVariables;

//Type
type Props = {
  sections: SectionsType;
  containerHeight: number;
  headerHeight: number;
  paymentFeesHeight: number;
  isLanguagesOpen: boolean | null;
  isBurgerMenuOpen: boolean | null;
  languagesHandler: () => void;
  burgerMenuHandler: () => void;
};

//Styles
const StyledHeader = styled.header`
  background-color: ${headerColor};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-sizing: border-box;
  padding-left: 4vw;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.94vw;
  z-index: 10;
  border-bottom: 0.5px ${whiteColor} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 1vw 8.27vw 0;
    min-height: 12.5vw;
    justify-content: space-between;
  }
`;

const StyledBurgerButton = styled(CustomButton)`
  background-color: transparent;
  border-radius: 0;
  display: flex;
`;

const StyledBurgerImage = styled.img`
  width: 6.5vw;
  height: 3.77vw;
`;

const StyledLogoContainer = styled.div`
  position: relative;
  z-index: 11;
`;

const StyledFeedbackWidgets = styled(FeedbackWidgets)`
  margin-left: 1.2vw;
  width: 20vw;
  display: flex;
  justify-content: end;
`;

const StyledLanguageButton = styled(CustomButton)`
  margin: 0 2vw;
  background-color: transparent;
  border-radius: 0;
  display: flex;
`;

const StyledLanguageImage = styled.img`
  width: 2.22vw;
  height: 2.22vw;
`;

//Component
export const Header = forwardRef<HTMLElement, Props>(
  (
    {
      sections,
      containerHeight,
      isLanguagesOpen,
      isBurgerMenuOpen,
      languagesHandler,
      burgerMenuHandler,
      headerHeight,
    },
    ref
  ) => {
    const { t } = useTranslation();
    const headerData = getData("Header", t) as HeaderType;
    const { loginAndRegister, language, menu, closeIcon } = headerData;

    const isMobile = useMobileDetection();

    return (
      <>
        <StyledHeader ref={ref}>
          <StyledLogoContainer>
            <Logo />
          </StyledLogoContainer>
          {isMobile !== null && !isMobile && (
            <>
              <StyledFeedbackWidgets type={"light"} $location={"menu"} />
              <HeaderNavigation
                sections={sections}
                headerHeight={headerHeight}
                isLanguagesOpen={isLanguagesOpen}
                languagesHandler={languagesHandler}
              />
              <SignInAndSignUp loginAndRegister={loginAndRegister} />
              <StyledLanguageButton
                disabled={!!isLanguagesOpen}
                type="button"
                onClick={languagesHandler}
                aria-label={language.alt}
              >
                <StyledLanguageImage
                  src={language.srcGray}
                  alt={language.alt}
                />
              </StyledLanguageButton>
            </>
          )}
          {isMobile && (
            <StyledBurgerButton
              disabled={!!isBurgerMenuOpen}
              type="button"
              onClick={burgerMenuHandler}
              aria-label={menu.alt}
            >
              <StyledBurgerImage src={menu.src} alt={menu.alt} />
            </StyledBurgerButton>
          )}
        </StyledHeader>
        {isMobile && (
          <DropRightElement
            isOpen={isBurgerMenuOpen}
            headerHeight={headerHeight}
            containerHeight={containerHeight}
          >
            <MobileMenu
              containerHeight={containerHeight}
              sections={sections}
              headerHeight={headerHeight}
              isBurgerMenuOpen={isBurgerMenuOpen}
              burgerMenuHandler={burgerMenuHandler}
              languagesHandler={languagesHandler}
              language={language}
              menu={menu}
              loginAndRegister={loginAndRegister}
              closeIcon={closeIcon}
            />
          </DropRightElement>
        )}
        <DropRightElement
          isOpen={isLanguagesOpen}
          headerHeight={headerHeight}
          containerHeight={containerHeight}
        >
          <LanguageSwitcher
            containerHeight={containerHeight}
            headerHeight={headerHeight}
            isLanguagesOpen={isLanguagesOpen}
            languagesHandler={languagesHandler}
            language={language}
            closeIcon={closeIcon}
          />
        </DropRightElement>
      </>
    );
  }
);

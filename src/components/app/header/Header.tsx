import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { Logo } from "@/components/app/common/Logo/Logo.tsx";
import { FeedbackWidgets } from "@/components/app/common/feedback-widgets/FeedbackWidgets.tsx";
import { forwardRef } from "react";
import { LanguageSwitcher } from "./drop-right-element/language-switcher/LanguageSwitcher.tsx";
import { MobileMenu } from "./drop-right-element/mobile-menu/MobileMenu.tsx";
import { SignInAndSignUp } from "./sign-in-and-sign-up/SigninAndSignup.tsx";
import { HeaderNavigation } from "./header-navigation/HeaderNavigation.tsx";
import {
  burger,
  headerAndMobileMenuIcons,
  language,
} from "@/assets/constants/constants.ts";
import { DropRightElement } from "./drop-right-element/DropRightElement.tsx";

const { whiteColor, headerColor } = colorVariables;

//Data
const languageData = {
  text: "Language",
};

const menuData = {
  text: "Menu",
};

//Types
export type Section = {
  id: string;
  title: string;
};

type Props = {
  sections: Section[];
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
    const isMobile = useMobileDetection();

    if (isMobile === null) {
      return <StyledHeader ref={ref} />;
    }

    return (
      <>
        <StyledHeader ref={ref}>
          <StyledLogoContainer>
            <Logo color="transparent" />
          </StyledLogoContainer>
          {!isMobile && (
            <>
              <StyledFeedbackWidgets
                type={"light"}
                $location={"menu"}
                iconsToShow={headerAndMobileMenuIcons}
              />
              <HeaderNavigation
                sections={sections}
                headerHeight={headerHeight}
                isLanguagesOpen={isLanguagesOpen}
                languagesHandler={languagesHandler}
              />
              <SignInAndSignUp />
              <StyledLanguageButton
                disabled={!!isLanguagesOpen}
                type="button"
                onClick={languagesHandler}
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
            >
              <StyledBurgerImage src={burger.src} alt={burger.alt} />
            </StyledBurgerButton>
          )}
        </StyledHeader>
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
            language={languageData.text}
            menu={menuData.text}
          />
        </DropRightElement>
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
            language={languageData.text}
          />
        </DropRightElement>
      </>
    );
  }
);

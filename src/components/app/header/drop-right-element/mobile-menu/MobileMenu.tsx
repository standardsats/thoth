import styled from "styled-components";
import { FC } from "react";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { FeedbackWidgets } from "@/components/app/common/feedback-widgets/FeedbackWidgets.tsx";
import { HeaderNavigation } from "@/components/app/header/header-navigation/HeaderNavigation.tsx";
import { IconAndTextProps } from "@/components/app/header/icon-and-text/IconAndText.tsx";
import { SignInAndSignUp } from "@/components/app/header/sign-in-and-sign-up/SignInAndSignUp.tsx";

import {
  CloseIconType,
  LanguageType,
  LoginAndRegisterType,
  MenuType,
} from "@/assets/constants/app/header/Header.ts";
import { SectionsType } from "@/assets/constants/app/App.ts";

//Type
type BurgerMenuProps = {
  containerHeight: number;
  language: LanguageType;
  menu: MenuType;
  sections: SectionsType;
  headerHeight: number;
  isBurgerMenuOpen: null | boolean;
  burgerMenuHandler: () => void;
  languagesHandler: () => void;
  loginAndRegister: LoginAndRegisterType;
  closeIcon: CloseIconType;
};

//Styles
const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: ${sizeVariable}) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16.7vw 5vw 15vw 5vw;
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const StyledCloseButton = styled(CustomButton)`
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  display: flex;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 6.88vw 0 4.51vw 1vw;
  padding: 5.09vw 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

//Component
export const MobileMenu: FC<BurgerMenuProps> = ({
  language,
  menu,
  sections,
  headerHeight,
  languagesHandler,
  isBurgerMenuOpen,
  burgerMenuHandler,
  loginAndRegister,
  closeIcon,
}) => {
  return (
    <MobileMenuContainer>
      <StyledWrapper>
        <StyledCloseButton
          disabled={!isBurgerMenuOpen}
          type="button"
          onClick={burgerMenuHandler}
          aria-label={closeIcon.alt}
        >
          <StyledImage src={closeIcon.src} alt={closeIcon.alt} />
        </StyledCloseButton>
        <IconAndTextProps image={menu} />
      </StyledWrapper>
      <HeaderNavigation
        sections={sections}
        headerHeight={headerHeight}
        burgerMenuHandler={burgerMenuHandler}
      />
      <StyledContainer>
        <IconAndTextProps
          image={language}
          isButton={true}
          onClick={languagesHandler}
        />
      </StyledContainer>
      <SignInAndSignUp
        loginAndRegister={loginAndRegister}
        onClick={burgerMenuHandler}
      />
      <FeedbackWidgets
        $location={"menu"}
        type={"light"}
        onClick={burgerMenuHandler}
      />
    </MobileMenuContainer>
  );
};

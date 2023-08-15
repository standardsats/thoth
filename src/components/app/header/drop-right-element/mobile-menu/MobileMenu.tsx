import styled from "styled-components";
import { FC } from "react";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { divWithImage, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { Section } from "../../Header.tsx";
import { SignInAndSignUp } from "../../sign-in-and-sign-up/SigninAndSignup.tsx";
import { FeedbackWidgets } from "@/components/app/common/feedback-widgets/FeedbackWidgets.tsx";
import { HeaderNavigation } from "../../header-navigation/HeaderNavigation.tsx";
import { IconAndTextProps } from "../../icon-and-text/IconAndText.tsx";
import { headerAndMobileMenuIcons } from "@/assets/constants/constants.ts";

//Type
type BurgerMenuProps = {
  containerHeight: number;
  language: string;
  menu: string;
  sections: Section[];
  headerHeight: number;
  isBurgerMenuOpen: null | boolean;
  burgerMenuHandler: () => void;
  languagesHandler: () => void;
};

//Styles
const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: ${sizeVariable}) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
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
  ${divWithImage};
  background-color: transparent;
  width: 2.95vw;
  height: 2.16vw;
  border-radius: 0;
  background-image: url("images/header/close-icon.svg");
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

const StyledFeedbackWidgets = styled(FeedbackWidgets)`
  @media (max-width: ${sizeVariable}) {
    align-self: start;
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
}) => {
  return (
    <MobileMenuContainer>
      <StyledWrapper>
        <StyledCloseButton
          disabled={!isBurgerMenuOpen}
          type="button"
          onClick={burgerMenuHandler}
        />
        <IconAndTextProps type="burger menu" text={menu} />
      </StyledWrapper>
      <HeaderNavigation
        sections={sections}
        headerHeight={headerHeight}
        burgerMenuHandler={burgerMenuHandler}
      />
      <StyledContainer>
        <IconAndTextProps
          type="language"
          text={language}
          isButton={true}
          onClick={languagesHandler}
        />
      </StyledContainer>
      <SignInAndSignUp onClick={burgerMenuHandler} />
      <StyledFeedbackWidgets
        $location={"menu"}
        type={"light"}
        iconsToShow={headerAndMobileMenuIcons}
        onClick={burgerMenuHandler}
      />
    </MobileMenuContainer>
  );
};

import styled from "styled-components";
import { CustomButton } from "../common/button/Button.tsx";
import {
  colorVariables,
  divWithImage,
  fontFamily,
} from "../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { headerButtons } from "../../assets/constants/constants.ts";
import { Logo } from "../common/Logo/Logo.tsx";
import { FeedbackWidgets } from "../feedback-widgets/FeedbackWidgets.tsx";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 6.94vw;
  background-color: transparent;
  z-index: 10;
  border-bottom: 0.5px ${colorVariables.whiteColor} solid;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1400px) {
    box-sizing: border-box;
    padding: 0 8.27vw;
    min-height: 25vw;
    justify-content: space-between;
  }
`;

const StyledBurgerButton = styled.div`
  ${divWithImage};
  width: 6.5vw;
  height: 3.77vw;
  background-image: url("/src/assets/images/burger-icon.svg");
`;

//TODO
// Заменить стили StyledSignUpText после подключения актуального шрифта

const StyledSignUpText = styled.span`
  display: inline-block;
  margin-right: 1.89vw;
  color: ${colorVariables.whiteColor};
  font-size: 0.97vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.42px;
  text-decoration: underline;
`;

const StyledSignInText = styled.span`
  padding: 0.6vw 1.47vw;
  display: inline-block;
  color: ${colorVariables.whiteColor};
  font-size: 0.97vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.42px;
`;

const StyledButtonContent = styled.div`
  display: flex;
`;

export function Header() {
  const isMobile = useMobileDetection();
  const BurgerButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button burger menu");
  };

  const SignUpButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button register");
  };

  const SignInButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button login");
  };

  const ContentBurgerButton = <StyledBurgerButton />;

  const ContentSignUpButton = (
    <StyledButtonContent>
      <StyledSignUpText>{headerButtons.signUp}</StyledSignUpText>
    </StyledButtonContent>
  );
  const ContentSignInButton = (
    <StyledButtonContent>
      <StyledSignInText>{headerButtons.signIn}</StyledSignInText>
    </StyledButtonContent>
  );

  if (isMobile === null) {
    return null;
  }

  return (
    <StyledHeader>
      <Logo />
      {isMobile && (
        <CustomButton
          type={"button"}
          children={ContentBurgerButton}
          onClick={BurgerButtonHandler}
          $background={"transparent"}
        />
      )}
      {!isMobile && (
        <>
          <FeedbackWidgets type={"light"} />
          <div>
            <CustomButton
              type={"button"}
              children={ContentSignUpButton}
              onClick={SignUpButtonHandler}
              $background={"transparent"}
            />
            <CustomButton
              type={"button"}
              children={ContentSignInButton}
              onClick={SignInButtonHandler}
            />
          </div>
        </>
      )}
    </StyledHeader>
  );
}

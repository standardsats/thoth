import styled from "styled-components";
import { CustomButton } from "../common/customButton/CustomButton.tsx";
import {
  colorVariables,
  divWithImage,
  fontFamily,
  fontFamilySecond,
  resetMarginsAndPaddings,
} from "../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { Logo } from "../common/Logo/Logo.tsx";
import { FeedbackWidgets } from "../feedback-widgets/FeedbackWidgets.tsx";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

//Data
const headerButtons = {
  signUp: "Register",
  signIn: "Log In",
};

//Styles
type Section = {
  id: string;
  title: string;
};

type HeaderProps = {
  sections: Section[];
};

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
  justify-content: start;
  align-items: center;

  @media (max-width: 1400px) {
    box-sizing: border-box;
    padding: 0 8.27vw;
    min-height: 25vw;
    justify-content: space-between;
  }
`;

const StyledList = styled.ul`
  ${resetMarginsAndPaddings};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  width: 41.11vw;
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.9);
`;

const StyledItem = styled.li`
  ${resetMarginsAndPaddings};
  ${fontFamilySecond};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.48px;
  text-align: left;
  max-width: 7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  a {
    ${resetMarginsAndPaddings};
    display: inline-block;
    max-width: 7vw;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const StyledBurgerButton = styled.div`
  ${divWithImage};
  width: 6.5vw;
  height: 3.77vw;
  background-image: url("/src/images/burger-icon.svg");
`;

//TODO
// Заменить стили StyledSignUpText после подключения актуального шрифта

const StyledSignUpText = styled.span`
  color: ${colorVariables.whiteColor};
  ${fontFamilySecond};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
`;

const StyledSignInText = styled.span`
  color: ${colorVariables.whiteColor};
  ${fontFamily};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;
`;

const StyledButtonContent = styled.div`
  display: flex;
`;

const StyledButtonLogin = styled(CustomButton)`
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${colorVariables.greenColor} 0%,
    ${colorVariables.lightGreenColor} 100%
  );
`;

const StyledLogo = styled(Logo)`
  border: 1px solid red;
`;

const StyledButtonRegister = styled(CustomButton)`
  background-color: transparent;
`;

export const Header: FC<HeaderProps> = ({ sections }) => {
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
      <p>test2</p>
      <StyledLogo />
      {isMobile && (
        <CustomButton
          type={"button"}
          children={ContentBurgerButton}
          onClick={BurgerButtonHandler}
        />
      )}
      {!isMobile && (
        <>
          <FeedbackWidgets type={"light"} />
          <nav>
            <StyledList>
              {sections.map((section) => (
                <StyledItem key={section.id}>
                  <ScrollLink
                    to={section.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {section.title}
                  </ScrollLink>
                </StyledItem>
              ))}
            </StyledList>
          </nav>
          <div>
            <StyledButtonRegister
              type={"button"}
              children={ContentSignUpButton}
              onClick={SignUpButtonHandler}
            />
            <StyledButtonLogin
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

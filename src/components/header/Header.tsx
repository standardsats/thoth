import styled from "styled-components";
import { CustomButton } from "@/components/common/customButton/CustomButton.tsx";
import {
  colorVariables,
  divWithImage,
  fontFamily,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { Logo } from "@/components/common/Logo/Logo.tsx";
import { FeedbackWidgets } from "@/components/common/feedback-widgets/FeedbackWidgets.tsx";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  BurgerButtonHandler,
  SignIn,
  SignUp,
} from "../../../public/ButtonsHandlers.ts";

const { whiteColor, greenColor, lightGreenColor } = colorVariables;

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
  box-sizing: border-box;
  padding-left: 4vw;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 6.94vw;
  background-color: transparent;
  z-index: 10;
  border-bottom: 0.5px ${whiteColor} solid;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 10vw 8.27vw 0;
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
  margin: 0 2vw;
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

const StyledBurgerButton = styled(CustomButton)`
  ${divWithImage};
  background-color: transparent;
  width: 6.5vw;
  height: 3.77vw;
  border-radius: 0;
  background-image: url("images/header/burger-icon.svg");
`;

const StyledSignUpText = styled.span`
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
`;

const StyledSignInText = styled.span`
  color: ${whiteColor};
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
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );
`;

const StyledLogo = styled(Logo)`
  width: 20vw;
  display: flex;
  position: relative;
`;

const StyledButtonRegister = styled(CustomButton)`
  margin-right: 2vw;
  background-color: transparent;
`;

const StyledWrapper = styled.div`
  margin-right: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header: FC<HeaderProps> = ({ sections }) => {
  const isMobile = useMobileDetection();

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
      <StyledLogo color="transparent" />
      {isMobile && (
        <StyledBurgerButton
          type={"button"}
          children={<></>}
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
          <StyledWrapper>
            <StyledButtonRegister
              type={"button"}
              children={ContentSignUpButton}
              onClick={SignUp}
            />
            <StyledButtonLogin
              type={"button"}
              children={ContentSignInButton}
              onClick={SignIn}
            />
          </StyledWrapper>
        </>
      )}
    </StyledHeader>
  );
};

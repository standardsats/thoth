import { FC } from "react";
import styled from "styled-components";
import {
  colorVariables,
  fontFamilyMedium,
  fontFamilySecond,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { signInHref, signUpHref } from "@/assets/links-href/LinksHref.ts";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { LoginAndRegisterType } from "@/assets/constants/app/header/Header.ts";

const { whiteColor, greenColor, lightGreenColor } = colorVariables;

//Types
type Props = {
  onClick?: () => void;
  loginAndRegister: LoginAndRegisterType;
};

//Styles
const StyledWrapper = styled.div`
  position: relative;
  z-index: 11;
  width: 15.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    margin: 0 0 10vw 2vw;
    width: 95%;
    justify-content: start;
  }
`;

const StyledLinkLogin = styled(Link)`
  border-radius: 5px;
  padding: 0.5vw 2vw;
  background: linear-gradient(
    133deg,
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );
  word-break: break-word;
  @media (max-width: ${sizeVariable}) {
    padding: 1.7vw 4.4vw;
  }
`;

const StyledLinkRegister = styled(Link)`
  visibility: hidden;
  margin: 0 1vw;
  background-color: transparent;
  word-break: break-word;
  @media (max-width: ${sizeVariable}) {
    margin: 0 7.5vw 0 2vw;
  }
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

  @media (max-width: ${sizeVariable}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(16vw / 5.09);
  }
`;

const StyledSignInText = styled.span`
  color: ${whiteColor};
  ${fontFamilyMedium};
  font-size: calc(14vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.42px;

  @media (max-width: ${sizeVariable}) {
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(14vw / 5.09);
  }
`;

const StyledButton = styled(CustomButton)`
  background-color: transparent;
  display: flex;
`;

//Component
export const SignInAndSignUp: FC<Props> = ({ onClick, loginAndRegister }) => {
  const { signUp, signIn } = loginAndRegister;
  return (
    <StyledWrapper>
      <StyledLinkRegister
        color={"transparent"}
        href={signUpHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {onClick ? (
          <StyledButton type="button" disabled={!onClick} onClick={onClick}>
            <StyledSignUpText>{signUp}</StyledSignUpText>
          </StyledButton>
        ) : (
          <StyledSignUpText>{signUp}</StyledSignUpText>
        )}
      </StyledLinkRegister>
      <StyledLinkLogin
        color={"transparent"}
        href={signInHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {onClick ? (
          <StyledButton type="button" disabled={!onClick} onClick={onClick}>
            <StyledSignInText>{signIn}</StyledSignInText>
          </StyledButton>
        ) : (
          <StyledSignInText>{signIn}</StyledSignInText>
        )}
      </StyledLinkLogin>
    </StyledWrapper>
  );
};

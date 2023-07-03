import { HTMLAttributes } from "react";
import styled from "styled-components";
import { CustomButton } from "../common/button/Button.tsx";
import {
  colorVariables,
  divWithImage,
  fontFamily,
} from "../../assets/styles/commonStyles.ts";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { headerButtons } from "../../assets/constants/constants.ts";

type StyledNetworkButtonProps = HTMLAttributes<HTMLDivElement> & {
  $image: string;
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
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1400px) {
    box-sizing: border-box;
    padding: 0 8.27vw;
    min-height: 25vw;
    justify-content: space-between;
  }
`;

const StyledLogo = styled.div`
  ${divWithImage};
  width: 11.25vw;
  height: 2.63vw;
  background-image: url("/src/assets/images/logo.svg");

  @media (max-width: 1400px) {
    width: 25vw;
    height: 5.06vw;
  }
`;

const StyledBurgerButton = styled.div`
  ${divWithImage};
  width: 6.5vw;
  height: 3.77vw;
  background-image: url("/src/assets/images/burger-icon.svg");
`;

const StyledNetworks = styled.div`
  min-width: 13.13vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNetworkButton = styled.div<StyledNetworkButtonProps>`
  ${divWithImage};
  width: 2.22vw;
  height: 2.22vw;
  background-image: url(${(props) => props.$image});
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

//TODO каждую кнопку социальных сетей из header придется вынести в отдельный компонент
// В пропсах будет приходить картинка

export function Header() {
  const isMobile = useMobileDetection();
  const BurgerButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button burger menu");
  };

  const TwitterButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button Twitter");
  };

  const TelegramButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button Telegram");
  };

  const FacebookButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button Facebook");
  };

  const EmailButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button email");
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
  const ContentTwitterButton = (
    <StyledNetworkButton $image={"/src/assets/images/twitter-header.svg"} />
  );
  const ContentTelegramButton = (
    <StyledNetworkButton $image={"/src/assets/images/telegram-header.svg"} />
  );
  const ContentFacebookButton = (
    <StyledNetworkButton $image={"/src/assets/images/facebook-header.svg"} />
  );
  const ContentEmailButton = (
    <StyledNetworkButton $image={"/src/assets/images/email-header.svg"} />
  );
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
      <StyledLogo />
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
          <StyledNetworks>
            <CustomButton
              type={"button"}
              children={ContentTwitterButton}
              onClick={TwitterButtonHandler}
              $background={"transparent"}
            />
            <CustomButton
              type={"button"}
              children={ContentTelegramButton}
              onClick={TelegramButtonHandler}
              $background={"transparent"}
            />
            <CustomButton
              type={"button"}
              children={ContentFacebookButton}
              onClick={FacebookButtonHandler}
              $background={"transparent"}
            />
            <CustomButton
              type={"button"}
              children={ContentEmailButton}
              onClick={EmailButtonHandler}
              $background={"transparent"}
            />
          </StyledNetworks>
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

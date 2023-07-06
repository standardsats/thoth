import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithImage,
  fontFamily,
} from "../../../assets/styles/commonStyles.ts";
import { CustomButton } from "../../common/button/Button.tsx";
import { Title } from "../../title/Title.tsx";
import { CustomText } from "../../text/Text.tsx";

type MobileWallet = {
  title: string;
  text: string;
  button: string;
};

const mobileWallet: MobileWallet = {
  title: "Mobile Wallet",
  text: "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
  button: "Download",
};

const StyledMobileWallet = styled.div`
  position: relative;
  background-color: ${colorVariables.darkColor};
  min-height: 41.53vw;

  @media (max-width: 1400px) {
    min-height: 212.58vw;
    flex-direction: column;
  }
`;

const StyledMonitor = styled.div`
  padding-left: 4.5vw;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  ${coverImage};
  background-image: url("/src/assets/images/products-and-service/test.svg");
`;

const StyledText = styled(CustomText)`
  max-width: 37%;

  ${({ $lineheight, $margin, $textalign }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    text-align: ${$textalign};
  `}
`;

const StyledButton = styled(CustomButton)`
  border-radius: 0;
`;

const StyledButtonContent = styled.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`;

const StyledDownloadText = styled.span`
  margin-left: 2.29vw;
  color: ${colorVariables.whiteColor};
  font-size: 1.11vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: 1400px) {
    font-size: 3.15vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 0.97vw;
  height: 1.53vw;
  background-image: url("/src/assets/images/products-and-service/download-icon.svg");

  @media (max-width: 1400px) {
    width: 3.35vw;
    height: 2.95vw;
  }
`;

const DownloadButtonHandler = () => {
  //TODO актуализировть событие
  console.log("Press download button");
};

// const fontSize = isMobile ? "4.92vw" : "1.74vw";
// const margin = isMobile ? "3.58vw 0 6.04vw" : "1.46vw 0 5.9vw";

const ContentDownloadButton = (
  <StyledButtonContent>
    <StyledIcon />
    <StyledDownloadText>{mobileWallet.button}</StyledDownloadText>
  </StyledButtonContent>
);

export const MobileWallet = () => {
  return (
    <StyledMobileWallet>
      <StyledMonitor>
        <Title color={colorVariables.whiteColor}>{mobileWallet.title}</Title>
        <StyledText
          color={colorVariables.whiteColor}
          fontSize={"1.39vw"}
          $lineheight={"1.5"}
          $margin={"3.06vw 0 3.75vw"}
          $textalign={"left"}
        >
          {mobileWallet.text}
        </StyledText>
        <StyledButton
          type={"button"}
          children={ContentDownloadButton}
          onClick={DownloadButtonHandler}
        />
      </StyledMonitor>
    </StyledMobileWallet>
  );
};

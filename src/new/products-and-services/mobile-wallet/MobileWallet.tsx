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
import { useMobileDetection } from "../../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../../section-title/SectionTitle.tsx";

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
    background-color: ${colorVariables.darkGrayColor};
    box-sizing: border-box;
    min-height: 270.66vw;
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
  background-image: url("/src/assets/images/products-and-service/mobile-wallet-L.svg");
  
  @media (max-width: 1400px) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url("/src/assets/images/products-and-service/mobile-wallet-S.svg");
    justify-content: end;
    align-items: start;
  }
`;

const StyledText = styled(CustomText)`
  max-width: 37%;

  @media (max-width: 1400px) {
    max-width: 90%;
  }

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
    margin-left: 6vw;
    font-size: 3.19vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 0.97vw;
  height: 1.53vw;
  background-image: url("/src/assets/images/products-and-service/download-icon.svg");

  @media (max-width: 1400px) {
    width: 2.39vw;
    height: 2.79vw;
  }
`;

const DownloadButtonHandler = () => {
  //TODO актуализировть событие
  console.log("Press download button");
};

const ContentDownloadButton = (
  <StyledButtonContent>
    <StyledIcon />
    <StyledDownloadText>{mobileWallet.button}</StyledDownloadText>
  </StyledButtonContent>
);


export const MobileWallet = () => {
  const { whiteColor } = colorVariables;
  const isMobile = useMobileDetection();

  const fontSize = isMobile ? "4.92vw" : "1.39vw";
  const margin = isMobile ? "8.82vw 0" : "3.06vw 0 3.75vw";
  return (
    <StyledMobileWallet>
      <StyledMonitor>
        <SectionTitle color={whiteColor}>{mobileWallet.title}</SectionTitle>
        <StyledText
          color={colorVariables.whiteColor}
          fontSize={fontSize}
          $lineheight={"1.6"}
          $margin={margin}
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

import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithImage,
  fontFamily,
  sizeVariable,
  TextMixin,
} from "../../../assets/styles/commonStyles.ts";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { CustomButton } from "../../common/customButton/CustomButton.tsx";

const { darkColor, whiteColor, darkGrayColor, lightGreenColor, greenColor } =
  colorVariables;

//Data
const mobileWallet: MobileWallet = {
  title: "Mobile Wallet",
  text: "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
  button: "Download",
};

//Type
type MobileWallet = {
  title: string;
  text: string;
  button: string;
};

//Styles
const StyledMobileWallet = styled.section`
  position: relative;
  background-color: ${darkColor};
  min-height: 41.53vw;

  @media (max-width: ${sizeVariable}) {
    background-color: ${darkGrayColor};
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

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url("/src/assets/images/products-and-service/mobile-wallet-S.svg");
    justify-content: end;
    align-items: start;
  }
`;

const StyledText = styled.p`
  max-width: 37%;
  ${TextMixin};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${sizeVariable}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`;

const StyledButton = styled(CustomButton)`
  background: linear-gradient(
    133deg,
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );
  border-radius: 0;
`;

const StyledButtonContent = styled.div`
  padding: 0.8vw 1.7vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizeVariable}) {
    min-width: 33vw;
    min-height: 8.33vw;
  }
`;

const StyledDownloadText = styled.span`
  margin-left: 2.29vw;
  color: ${whiteColor};
  font-size: 1.11vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${sizeVariable}) {
    margin-left: 6vw;
    font-size: 3.19vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 0.97vw;
  height: 1.53vw;
  background-image: url("/src/assets/images/products-and-service/download-icon.svg");

  @media (max-width: ${sizeVariable}) {
    width: 2.39vw;
    height: 2.79vw;
  }
`;

//Component
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

  return (
    <StyledMobileWallet>
      <StyledMonitor>
        <SectionTitle color={whiteColor}>{mobileWallet.title}</SectionTitle>
        <StyledText>{mobileWallet.text}</StyledText>
        <StyledButton
          type={"button"}
          children={ContentDownloadButton}
          onClick={DownloadButtonHandler}
        />
      </StyledMonitor>
    </StyledMobileWallet>
  );
};

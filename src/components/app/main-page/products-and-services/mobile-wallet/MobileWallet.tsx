import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  sizeVariable,
  TextMixin,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { appHref, googleHref } from "@/assets/links-href/LinksHref.ts";
import { mobileWalletImages } from "@/assets/constants/constants.ts";

const { darkColor, whiteColor, darkGrayColor } = colorVariables;

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
  width: 100vw;
  box-sizing: border-box;
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
  padding-left: 4.28vw;
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
  background-image: url(${mobileWalletImages.backgroundL});

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${mobileWalletImages.backgroundS});
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

const StyledWrapper = styled.div``;

const StyledImage = styled.img`
  width: calc(218vw / 14.4);
  height: calc(56vw / 14.4);
  border: 0.7px solid white;
  border-radius: 10px;
  padding: 0.5vw;
  box-sizing: border-box;

  @media (max-width: ${sizeVariable}) {
    width: calc(168vw / 5.08);
    height: calc(50vw / 5.08);
    padding: 1vw;
  }
`;

const StyledLink = styled(Link)`
  margin-right: calc(72vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    margin-right: calc(72vw / 14.4);
  }
`;

//Component
export const MobileWallet = () => {
  return (
    <StyledMobileWallet>
      <StyledMonitor>
        <SectionTitle color={whiteColor}>{mobileWallet.title}</SectionTitle>
        <StyledText>{mobileWallet.text}</StyledText>
        <StyledWrapper>
          <StyledLink
            color={"transparent"}
            href={googleHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage
              src={mobileWalletImages.googlePay.src}
              alt={mobileWalletImages.googlePay.alt}
            />
          </StyledLink>
          <StyledLink
            color={"transparent"}
            href={appHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage
              src={mobileWalletImages.appStore.src}
              alt={mobileWalletImages.appStore.alt}
            />
          </StyledLink>
        </StyledWrapper>
      </StyledMonitor>
    </StyledMobileWallet>
  );
};

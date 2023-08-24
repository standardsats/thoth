import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  sizeVariable,
  TextMixin,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { MobileWalletLinks } from "@/components/app/main-page/products-and-services/mobile-wallet-links/MobileWalletLinks.tsx";
import { FC } from "react";
import { MobileWalletType, productsAndServiceImages } from "@/assets/constants/app/main-page/ProductAndService.ts";

const { darkColor, whiteColor, darkGrayColor } = colorVariables;

//Type
type Props = {
  mobileWallet: MobileWalletType;
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
  background-image: url(${productsAndServiceImages.mobileWallet.backgroundL});

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 0 9vw 4.14vw;
    background-image: url(${productsAndServiceImages.mobileWallet.backgroundS});
    justify-content: end;
    align-items: start;
  }
`;

const StyledText = styled.p`
  max-width: 40%;
  ${TextMixin};
  margin: 3.06vw 0 3.75vw;

  @media (max-width: ${sizeVariable}) {
    max-width: 90%;
    margin: 8.82vw 0;
  }
`;

const StyledWrapper = styled.div`
  width: 35vw;

  @media (max-width: ${sizeVariable}) {
    width: 70vw;
  }
`;

//Component
export const MobileWallet: FC<Props> = ({ mobileWallet }) => {
  const { title, text, links } = mobileWallet;

  return (
    <StyledMobileWallet>
      <StyledMonitor>
        <SectionTitle color={whiteColor}>{title}</SectionTitle>
        <StyledText>{text}</StyledText>
        <StyledWrapper>
          <MobileWalletLinks links={links} />
        </StyledWrapper>
      </StyledMonitor>
    </StyledMobileWallet>
  );
};

import styled from "styled-components";
import {
  colorVariables,
  sizeVariable,
  TextMixin,
} from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { MobileWalletLinks } from "@/components/app/main-page/products-and-services/mobile-wallet-links/MobileWalletLinks.tsx";
import { FC } from "react";
import {
  MobileWalletType,
  productsAndServiceImages,
} from "@/assets/constants/app/main-page/ProductAndService.ts";

const { darkColor, whiteColor, darkGrayColor } = colorVariables;

//Type
type Props = {
  mobileWallet: MobileWalletType;
};

//Styles
const StyledMobileWallet = styled.section`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  background-color: ${darkColor};
  min-height: 41.53vw;
  background-image: url(${productsAndServiceImages.mobileWallet.backgroundL});
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${sizeVariable}) {
    background-image: url(${productsAndServiceImages.mobileWallet.backgroundS});
    background-position: top center;
    background-color: ${darkGrayColor};
    box-sizing: border-box;
    flex-direction: column;
    min-height: 271vw;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  text-align: left;
`;

const StyledMonitor = styled.div`
  padding: 8vw 55vw 8vw 4.28vw;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    box-sizing: border-box;
    padding: 190vw 9vw 5vw;
    justify-content: start;
    align-items: start;
  }
`;

const StyledText = styled.p`
  max-width: 100%;
  ${TextMixin};
  min-height: 11vw;
  margin: 3.06vw 0 1.75vw;

  @media (max-width: ${sizeVariable}) {
    max-width: 100%;
    min-height: 40vw;
    margin: 8.82vw 0 3.82vw;
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
        <StyledSectionTitle color={whiteColor}>{title}</StyledSectionTitle>
        <StyledText>{text}</StyledText>
        <StyledWrapper>
          <MobileWalletLinks links={links} />
        </StyledWrapper>
      </StyledMonitor>
    </StyledMobileWallet>
  );
};

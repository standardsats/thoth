import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithImage,
  fontFamily,
  fontFamilyBold,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import { openAccountHref } from "@/assets/links-href/LinksHref.ts";
import { Link } from "@/components/app/common/Link/Link.tsx";
import {
  commonImages,
  mainScreenImages,
} from "@/assets/constants/constants.ts";

const { greenColor, lightGreenColor, whiteColor } = colorVariables;

//TODO
//Data перенесена в locales
// const mainScreen = {
//   span: "Digital Assets Processing"
//   title: "Accept Bitcoin Payments",
//   text: "Send, Store, Exchange and Accept Cryptocurrency.",
//   button: "Open Account",
// };

//Styles
const StyledScreen = styled.section`
  box-sizing: border-box;
  margin: 0 auto 7vw;
  position: relative;
  background-image: url(${mainScreenImages.backgroundL});
  ${coverImage};
  border-radius: 0 0 0 1.6vw;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  min-height: 51vw;
  box-shadow: 0 1.6vw 0 ${greenColor};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url(${mainScreenImages.coinsL});
    ${divWithImage};
  }

  &::after {
    content: "";
    position: absolute;
    display: flex;
    border-radius: 50%;
    z-index: -5;
    bottom: -6.5vw;
    left: 14.5vw;
    width: 11.5vw;
    height: 11.5vw;
    background-color: ${greenColor};
  }

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 10vw;
    background-image: url(${mainScreenImages.backgroundS});
    border-radius: 0 0 3.93vw 3.93vw;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3.54vw 0 ${greenColor};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-image: url(${mainScreenImages.coinsS});
      ${divWithImage};
    }

    &::after {
      content: "";
      position: absolute;
      display: flex;
      border-radius: 50%;
      z-index: -5;
      bottom: -9vw;
      left: 50%;
      transform: translateX(-50%);
      width: 16vw;
      height: 16vw;
      background-color: ${greenColor};
    }
  }
`;

const StyledContent = styled.div`
  box-sizing: border-box;
  margin: 17.47vw 0 2vw 4.28vw;
  width: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    margin: 123.05vw 0 10vw 0;
    padding: 1vw 7vw 5vw 9vw;
    width: 100vw;
    background-image: url(${mainScreenImages.wrapper});
    ${coverImage};
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  bottom: -5vw;
  left: 16vw;
  position: absolute;
  z-index: 1;
  width: 8.5vw;
  height: 8.5vw;
  background-image: url(${mainScreenImages.circle});
  ${coverImage};

  @media (max-width: ${sizeVariable}) {
    bottom: -6vw;
    left: 50%;
    transform: translateX(-50%);
    width: 12vw;
    height: 12vw;
  }
`;

const StyledSpanText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 0 0 1.9vw;
  color: rgba(255, 255, 255, 0.5);
  ${fontFamily};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
`;

const StyledMainTitle = styled.h1`
  ${resetMarginsAndPaddings};
  color: ${whiteColor};
  font-size: 3.89vw;
  ${fontFamilyBold};
  font-style: normal;
  font-weight: 700;
  line-height: 1.21;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: 9.84vw;
  }
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 1.46vw 0 5.9vw;
  ${fontFamily};
  font-size: calc(25vw / 14.4);
  color: ${greenColor};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin: 3.54vw 0 5.9vw;
    font-size: calc(25vw / 5.08);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: calc(20vw / 14.4);
  background: linear-gradient(
    133deg,
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );

  @media (max-width: ${sizeVariable}) {
    padding: calc(12vw / 5.08);
  }
`;

const StyleLinkText = styled.span`
  ${resetMarginsAndPaddings};
  margin-right: calc(20vw / 14.4);
  color: ${whiteColor};
  font-size: 1.11vw;
  ${fontFamilyBold};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5%;
  letter-spacing: -0.32px;

  @media (max-width: ${sizeVariable}) {
    margin-right: calc(12vw / 5.08);
    font-size: 3.15vw;
  }
`;

const StyledIcon = styled.div`
  ${divWithImage};
  width: 1.18vw;
  height: 1.04vw;
  background-image: url(${commonImages.playIconWhite});

  @media (max-width: ${sizeVariable}) {
    width: 3.35vw;
    height: 2.95vw;
  }
`;

//Component
export const MainScreen = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const isMobile = useMobileDetection();

  return (
    <StyledScreen className="main-screen" ref={ref}>
      <StyledContent>
        {!isMobile && <StyledSpanText>{t("mainScreen.span")}</StyledSpanText>}
        <StyledMainTitle>{t("mainScreen.title")}</StyledMainTitle>
        <StyledText>{t("mainScreen.text")}</StyledText>
        <StyledLink
          color={"transparent"}
          href={openAccountHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <>
            <StyleLinkText>{t("mainScreen.button")}</StyleLinkText>
            <StyledIcon />
          </>
        </StyledLink>
      </StyledContent>
      <StyledCircle />
    </StyledScreen>
  );
});

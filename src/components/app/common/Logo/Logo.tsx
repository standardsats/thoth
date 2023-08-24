import styled from "styled-components";
import { divWithImage, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { getData } from "@/assets/constants/constants.ts";
import { useTranslation } from "react-i18next";
import { LogoType } from "@/assets/constants/app/common/Logo.ts";

//Styles
export const StyledLogo = styled.img`
  ${divWithImage};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${sizeVariable}) {
    width: fit-content;
    height: 5.06vw;
  }
`;

//Component
export const Logo = () => {
  const { t } = useTranslation();
  const logoData = getData("Logo", t) as LogoType;
  const { src, alt } = logoData;
  return <StyledLogo src={src} alt={alt} />;
};

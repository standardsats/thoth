import styled from "styled-components";
import { divWithImage, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { FC } from "react";

//Types
type LogoProps = {
  color: string;
};

//Styles
export const StyledLogo = styled.div<LogoProps>`
  ${divWithImage};
  width: 11.25vw;
  height: 2.63vw;
  background-image: url("images/common/logo.svg");

  @media (max-width: ${sizeVariable}) {
    width: 25vw;
    height: 5.06vw;
  }
`;

//Component
export const Logo: FC<LogoProps> = ({ ...style }) => <StyledLogo {...style} />;

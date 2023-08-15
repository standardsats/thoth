import { FC } from "react";
import styled from "styled-components";
import { divWithImage, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { logo } from "@/assets/constants/constants.ts";

//Types
type Props = {
  color: string;
};

//Styles
export const StyledLogo = styled.img<Props>`
  ${divWithImage};
  width: fit-content;
  height: 2.63vw;

  @media (max-width: ${sizeVariable}) {
    width: fit-content;
    height: 5.06vw;
  }
`;

//Component
export const Logo: FC<Props> = ({ ...props }) => (
  <StyledLogo src={logo.src} alt={logo.alt} {...props} />
);

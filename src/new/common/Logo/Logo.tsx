import styled from "styled-components";
import {
  divWithImage,
  sizeVariable,
} from "../../../assets/styles/commonStyles.ts";

//Styles
const StyledLogo = styled.div`
  ${divWithImage};
  width: 11.25vw;
  height: 2.63vw;
  background-image: url("/src/assets/images/logo.svg");

  @media (max-width: ${sizeVariable}) {
    width: 25vw;
    height: 5.06vw;
  }
`;

//Component
export const Logo = () => <StyledLogo />;

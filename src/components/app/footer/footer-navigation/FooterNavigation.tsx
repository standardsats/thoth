import { FC, ReactNode } from "react";
import styled from "styled-components";
import {
  colorVariables,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { FooterTitleData } from "@/assets/constants/app/footer/Footer.ts";

const { whiteColor } = colorVariables;
//Types
type FooterNavigationProps = FooterTitleData & {
  children: ReactNode;
};

//Styles
const StyledColumn = styled.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`;

const StyledTitle = styled.h3`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.7vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 2vw;
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`;

const StyledLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${sizeVariable}) {
    margin: 0.5vw;
  }
`;

//Components
export const FooterNavigation: FC<FooterNavigationProps> = ({
  title,
  children,
}) => {
  return (
    <StyledColumn>
      <StyledTitle>{title}</StyledTitle>
      <StyledLinkList>{children}</StyledLinkList>
    </StyledColumn>
  );
};

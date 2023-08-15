import { FC, ReactNode } from "react";
import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { Subtitle } from "../subtitle/Subtitle.tsx";

//Types
type Props = {
  children: ReactNode;
};

//Styles
const StyledSubtitle = styled(Subtitle)`
  color: ${colorVariables.whiteColor};
  padding-bottom: 2.57vw;
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: calc(25vw / 14.4);
  line-height: 1.5;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
    padding-bottom: 0;
  }
`;

//Component
export const SlideSubtitle: FC<Props> = ({ children, ...props }) => (
  <StyledSubtitle {...props}>{children}</StyledSubtitle>
);

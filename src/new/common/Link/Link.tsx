import styled from "styled-components";
import { FC, ReactNode } from "react";
import { resetMarginsAndPaddings } from "../../../assets/styles/commonStyles.ts";

//Types
type LinkProps = {
  children: ReactNode;
  color: string;
  href: string;
  target?: string;
  $relAttribute: "noopener noreferrer";
};

//Styles
const StyledLink = styled.a<LinkProps>`
  ${resetMarginsAndPaddings};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

//Component
export const Link: FC<LinkProps> = ({
  href,
  target,
  $relAttribute,
  children,
  ...style
}) => (
  <StyledLink href={href} target={target} rel={$relAttribute} {...style}>
    {children}
  </StyledLink>
);

import { MouseEventHandler, ReactNode } from "react";
import { resetMarginsAndPaddings } from "@/assets/styles/commonStyles.ts";
import styled, { css } from "styled-components";

//Types
export type ButtonPropsType = {
  className?: string;
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | (() => void);
  type: "button" | "submit" | "reset";
  disabled: boolean;
};

//Styles
export const StyledButton = styled.button`
  ${resetMarginsAndPaddings};
  font-family: Gramatika-Regular, sans-serif;
  font-style: normal;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    `}
`;

//Component
export function CustomButton({
  className,
  children,
  onClick,
  type,
  disabled,
}: ButtonPropsType) {
  return (
    <StyledButton
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

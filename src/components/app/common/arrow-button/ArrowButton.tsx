import { CustomArrowProps } from "react-slick";
import styled from "styled-components";
import {
  ButtonPropsType,
  CustomButton,
} from "../customButton/CustomButton.tsx";
import { FC, ReactNode } from "react";

//Types
type Props = CustomArrowProps & {
  children: ReactNode;
  className: string;
  top?: string;
  left?: string;
  right?: string;
};

//Styles
const StyledButton = styled(CustomButton)<{
  $top?: string;
  $left?: string;
  $right?: string;
}>`
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  transition: background-color 0.3s;
  position: absolute;
  top: ${(props) => props.$top || "auto"};
  left: ${(props) => props.$left || "auto"};
  right: ${(props) => props.$right || "auto"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
`;

//Component
export const ArrowButton: FC<Props> = ({
  children,
  className,
  currentSlide,
  slideCount,
  top,
  left,
  right,
  ...props
}) => {
  const customButtonProps: ButtonPropsType = {
    className: className,
    onClick: props.onClick || (() => console.log("onClick")),
    type: "button",
    disabled: false,
  };

  return (
    <StyledButton
      {...customButtonProps}
      $top={top}
      $left={left}
      $right={right}
      {...props}
    >
      {children}
      {!currentSlide || !slideCount}
    </StyledButton>
  );
};

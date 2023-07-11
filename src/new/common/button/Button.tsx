import { ReactNode } from "react";
import { ButtonOld } from "../../../assets/styles/commonStyles.ts";

//Types
type ButtonPropsType = {
  className?: string;
  children?: ReactNode;
  onClick: () => void;
  minWidth?: string;
  type: "button" | "submit" | "reset";
  $background?: string;
  width?: string;
  $underline?: string;
};

//Component
export function CustomButton({
  className,
  children,
  onClick,
  type,
  $background,
  width,
}: ButtonPropsType) {
  return (
    <ButtonOld
      type={type}
      className={className}
      $background={$background}
      onClick={onClick}
      width={width}
    >
      {children}
    </ButtonOld>
  );
}

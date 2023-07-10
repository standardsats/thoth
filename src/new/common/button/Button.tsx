import { ReactNode } from "react";
import { Button } from "../../../assets/styles/commonStyles.ts";

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
    <Button
      type={type}
      className={className}
      $background={$background}
      onClick={onClick}
      width={width}
    >
      {children}
    </Button>
  );
}

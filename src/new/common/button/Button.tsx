import { ReactNode } from "react";
import { Button } from "../../../assets/styles/commonStyles.ts";

type ButtonPropsType = {
  className?: string;
  children?: ReactNode;
  onClick: () => void;
  minWidth?: string;
  type: "button" | "submit" | "reset";
  $background?: string;
};

export function CustomButton({
  className,
  children,
  onClick,
  type,
  $background,
}: ButtonPropsType) {
  return (
    <Button
      type={type}
      className={className}
      $background={$background}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

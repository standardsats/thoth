import { ReactNode } from "react";
import { ButtonNew } from "@/assets/styles/commonStyles.ts";

//Types
type ButtonPropsType = {
  className?: string;
  children?: ReactNode;
  onClick: () => void;
  type: "button" | "submit" | "reset";
};

//Component
export function CustomButton({
  className,
  children,
  onClick,
  type,
}: ButtonPropsType) {
  return (
    <ButtonNew type={type} className={className} onClick={onClick}>
      {children}
    </ButtonNew>
  );
}

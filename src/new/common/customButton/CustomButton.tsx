import { ReactNode } from "react";
import { ButtonNew } from "../../../assets/styles/commonStyles.ts";

//Types
type ButtonPropsType = {
  children?: ReactNode;
  onClick: () => void;
  type: "button" | "submit" | "reset";
};

//Component
export function CustomButton({ children, onClick, type }: ButtonPropsType) {
  return (
    <ButtonNew type={type} onClick={onClick}>
      {children}
    </ButtonNew>
  );
}

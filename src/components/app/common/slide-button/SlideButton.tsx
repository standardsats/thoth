import { FC, ReactNode } from "react";
import styled from "styled-components";
import { colorVariables } from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "../customButton/CustomButton.tsx";

const { whiteColor, greenColor } = colorVariables;

//Types
type Props = {
  id: string;
  isActive: boolean;
  length: number;
  onClick: (id: string) => void;
  children: ReactNode;
};

//Styles
const StyledButton = styled(CustomButton)<{
  $isActive: boolean;
  $length: number;
}>`
  padding: 0 2vw;
  background-color: transparent;
  width: calc(100% / ${({ $length }) => $length});
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? greenColor : whiteColor)};
`;

//Component
export const SlideButton: FC<Props> = ({
  isActive,
  id,
  onClick,
  length,
  children,
}) => {
  return (
    <StyledButton
      $isActive={isActive}
      $length={length}
      disabled={isActive}
      type={"button"}
      onClick={() => onClick(id)}
    >
      {children}
    </StyledButton>
  );
};

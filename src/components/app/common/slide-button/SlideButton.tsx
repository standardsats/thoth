import { FC, ReactNode } from "react";
import styled from "styled-components";
import { colorVariables } from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "../customButton/CustomButton.tsx";

const { whiteColor, greenColor } = colorVariables;

//Types
type Props = {
  id: string;
  isActive: boolean;
  width: string;
  onClick: (id: string) => void;
  children: ReactNode;
};

//Styles
const StyledButton = styled(CustomButton)<{
  $isActive: boolean;
  $width: string;
}>`
  padding: 0 2vw;
  background-color: transparent;
  width: ${({ $width }) => $width};
  border-bottom: 2px solid
    ${({ $isActive }) => ($isActive ? greenColor : whiteColor)};
`;

//Component
export const SlideButton: FC<Props> = ({
  isActive,
  id,
  onClick,
  children,
  width,
}) => {
  return (
    <StyledButton
      $isActive={isActive}
      $width={width}
      disabled={isActive}
      type={"button"}
      onClick={() => onClick(id)}
    >
      {children}
    </StyledButton>
  );
};

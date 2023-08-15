import { FC } from "react";
import styled from "styled-components";
import {
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { language, burger } from "@/assets/constants/constants.ts";

//Type
type IconAndTextProps = {
  type: "burger menu" | "language";
  text: string;
  isButton?: boolean;
  onClick?: () => void;
};

//Styles
const StyledWrapper = styled.div`
  display: flex;
  gap: 1vw;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    gap: 1vw;
  }
`;

const StyledIcon = styled.img<{ $isButton: boolean }>`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${sizeVariable}) {
    margin: ${({ $isButton }) => ($isButton ? "0" : "0 2vw")};
    width: ${({ $isButton }) => ($isButton ? "3vw" : "6.5vw")};
    height: ${({ $isButton }) => ($isButton ? "3vw" : "6.5vw")};
  }
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.39vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.6px;
  align-self: end;

  @media (max-width: ${sizeVariable}) {
    font-size: 3.92vw;
  }
`;

const StyledCustomButton = styled(CustomButton)`
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`;

//Component
export const IconAndTextProps: FC<IconAndTextProps> = ({
  type,
  text,
  isButton = false,
  onClick,
}) => {
  const src = type === "burger menu" ? burger.src : language.src;
  const alt = type === "burger menu" ? burger.alt : language.alt;

  return (
    <StyledWrapper>
      {isButton && onClick ? (
        <StyledCustomButton type="button" disabled={false} onClick={onClick}>
          <StyledIcon src={src} alt={alt} $isButton={isButton} />
        </StyledCustomButton>
      ) : (
        <StyledIcon src={src} alt={alt} $isButton={isButton} />
      )}
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

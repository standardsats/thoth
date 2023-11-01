import { FC } from "react";
import styled from "styled-components";
import {
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import {
  LanguageData,
  MenuData,
} from "@/assets/constants/app/header/Header.ts";

//Type
type IconAndTextProps = {
  image: LanguageData | MenuData;
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
    margin: ${({ $isButton }) => ($isButton ? "0 0 0.8vw" : "0 2vw")};
    width: ${({ $isButton }) => ($isButton ? "4.32vw" : "6.5vw")};
    height: ${({ $isButton }) => ($isButton ? "4.32vw" : "6.5vw")};
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
  display: flex;
  margin-right: 1vw;
  background: transparent;
  border-radius: 50px;
`;

//Component
export const IconAndText: FC<IconAndTextProps> = ({
  image,
  isButton = false,
  onClick,
}) => {
  const { src, alt, text } = image;

  return (
    <StyledWrapper>
      {isButton && onClick ? (
        <StyledCustomButton
          type="button"
          disabled={false}
          onClick={onClick}
          aria-label={alt}
        >
          <StyledIcon src={src} alt={alt} $isButton={isButton} />
        </StyledCustomButton>
      ) : (
        <StyledIcon src={src} alt={alt} $isButton={isButton} />
      )}
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  colorVariables,
  fontFamilyBold,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { commonImages } from "@/assets/constants/main.ts";
import { scrollTo } from "@/assets/functions/functions.ts";
import { FooterSettingsType } from "@/assets/constants/app/footer/Footer.ts";

const { whiteColor, greenColor, lightGreenColor } = colorVariables;

//Types
type Props = {
  data: FooterSettingsType;
};

//Styles
const StyledColumn = styled.div`
  padding-left: 2vw;
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 10vw;

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`;

const StyledTitle = styled.h3`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.7vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 2vw;
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`;

const StyledButtonContent = styled(CustomButton)`
  color: transparent;
  padding: 0.8vw 1.7vw 0.8vw 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    133deg,
    ${greenColor} 0%,
    ${lightGreenColor} 100%
  );

  @media (max-width: ${sizeVariable}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3.5vw 1.7vw 3.5vw 1.7vw;
    margin-top: 10.8vw;
    width: 100%;
  }
`;

const StyledButtonIcon = styled.div`
  width: 1.04vw;
  height: 1.18vw;
  background-image: url(${commonImages.playIconWhite});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${sizeVariable}) {
    width: 3.34vw;
    height: 2.95vw;
  }
`;

const StyledCheckText = styled.span`
  margin-right: 1vw;
  color: ${whiteColor};
  font-size: 1.11vw;
  ${fontFamilyBold};
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;

  @media (max-width: ${sizeVariable}) {
    margin-right: 4vw;
    font-size: 3.15vw;
  }
`;

//Component«
export const Settings: FC<Props> = ({ data }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const onClickHandler = () => {
    setIsDisabled(true);
    navigate("/delete");
    scrollTo(0);
  };
  return (
    <StyledColumn>
      <StyledTitle>{data.title}</StyledTitle>
      {data.buttons.map((button) => (
        <StyledButtonContent
          key={button.name}
          type="button"
          disabled={isDisabled}
          onClick={onClickHandler}
        >
          <StyledCheckText>{button.name}</StyledCheckText>
          <StyledButtonIcon />
        </StyledButtonContent>
      ))}
    </StyledColumn>
  );
};

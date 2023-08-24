import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { FC, useState } from "react";

const { ratesFeesColor, navigateLinkColor } = colorVariables;

//Type
type Props = {
  navigation: {
    button: string;
    separator: string;
    location: string;
  };
};

//Styles
const NavigationContainer = styled.div`
  padding-left: 5.4vw;
  background-color: ${ratesFeesColor};
  display: flex;
  flex-direction: row;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    padding-left: 6.4vw;
  }
`;

const StyledButton = styled(CustomButton)`
  background-color: transparent;
`;

const StyledText = styled.p`
  ${resetMarginsAndPaddings};
  margin-right: 0.2vw;
  ${fontFamily};
  color: ${navigateLinkColor};
  font-size: calc(15vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  @media (max-width: ${sizeVariable}) {
    margin-right: 1vw;
    font-size: calc(15vw / 5.09);
  }
`;

//Component
export const Navigation: FC<Props> = ({ navigation }) => {
  const { button, separator, location } = navigation;
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  //TODO
  //Поправить при роутинге
  const onClickNavigate = () => {
    setIsDisabled(true);
    navigate(`/`);
  };

  return (
    <NavigationContainer>
      <StyledButton
        type="button"
        disabled={isDisabled}
        onClick={onClickNavigate}
      >
        <StyledText>{button}</StyledText>
      </StyledButton>
      <StyledText>{separator}</StyledText>
      <StyledText>{location}</StyledText>
    </NavigationContainer>
  );
};

import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
} from "../../assets/styles/commonStyles.ts";
import { CustomButton } from "../common/button/Button.tsx";
import { Title } from "../title/Title.tsx";
import { sectionHowItWork } from "../../assets/constants/constants.ts";

type Data = {
  [key: string]: {
    button: string;
    textContent: string;
  };
};

const data: Data = {
  One: {
    button: "Merchants Solution",
    textContent:
      "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
  },
  Two: {
    button: "Enterprise Blockchain Wallets",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  Three: {
    button: "Wallet App",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  Four: {
    button: "Staking",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

const StyledDescription = styled.div`
  ${coverImage};
  min-height: 67.5vw;
  padding: 4.86vw;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/images/products-and-service/description-L.svg");

  @media (max-width: 1400px) {
    min-height: 212.58vw;
    flex-direction: column;
  }
`;

const StyledButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Monitor = styled.div`
  width: 88.47vw;
  min-height: 30.35vw;
  background-image: url("/src/assets/images/products-and-service/item-L.svg");
  border-radius: 30px;
  color: yellow;
`;

const ActiveButton = styled(CustomButton)`
  border-bottom: 1px solid ${colorVariables.greenColor};
  
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 25px;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &:hover {
    border-bottom: 1px solid ${colorVariables.greenColor};
  }
`;

const Button = styled(CustomButton)`
  border-bottom: 1px solid ${colorVariables.whiteColor};
  
  background: transparent;
  border-radius: 0;
  text-align: center;
  font-size: 25px;
  font-family: Grammatika, sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &:hover {
    border-bottom: 1px solid ${colorVariables.whiteColor};
  }
`;

export const ProductAndServices = () => {
  const [activeButton, setActiveButton] = useState<string>("One");
  const [monitorContent, setMonitorContent] = useState<string>(
    data["One"].textContent
  );

  useEffect(() => {
    // Обновить активную кнопку и содержимое монитора при первой загрузке
    setActiveButton("One");
    setMonitorContent(data["One"].textContent);
  }, []); // Пустой массив зависимостей, чтобы эффект сработал только при первой загрузке

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setMonitorContent(data[button].textContent);
  };

  return (
    <StyledDescription>
      <Title color={colorVariables.whiteColor}>
        {sectionHowItWork.title}
      </Title>
      <StyledButtons>
        {Object.keys(data).map((key) => {
          const isActive = activeButton === key;
          const ButtonComponent = isActive ? ActiveButton : Button;
          return (
            <ButtonComponent
              type={"button"}
              key={key}
              onClick={() => handleButtonClick(key)}
              width={"25%"}
            >
              {data[key].button}
            </ButtonComponent>
          );
        })}
      </StyledButtons>
      <Monitor>{monitorContent}</Monitor>
    </StyledDescription>
  );
};

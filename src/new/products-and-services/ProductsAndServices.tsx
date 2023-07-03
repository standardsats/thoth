import { useState } from "react";
import styled from "styled-components";

type Data = {
  [key: string]: {
    button: string;
    textContent: string;
  };
};

const data: Data = {
  One: {
    button: "one",
    textContent: "1",
  },
  Two: {
    button: "two",
    textContent: "2",
  },
  Three: {
    button: "three",
    textContent: "3",
  },
};

const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "green" : "gray")};
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: yellow;
`;

const Monitor = styled.div`
  margin-top: 20px;
`;

export const ProductAndServices = () => {
  const [activeButton, setActiveButton] = useState<string>("One");
  const [monitorContent, setMonitorContent] = useState<string>(
    data["One"].textContent
  );

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setMonitorContent(data[button].textContent);
  };

  return (
    <AppContainer>
      {Object.keys(data).map((key) => (
        <Button
          key={key}
          onClick={() => handleButtonClick(key)}
          active={activeButton === key}
        >
          {data[key].button}
        </Button>
      ))}
      <Monitor>{monitorContent}</Monitor>
    </AppContainer>
  );
};


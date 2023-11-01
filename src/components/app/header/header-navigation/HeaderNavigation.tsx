import { FC, useState } from "react";
import styled from "styled-components";
import {
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { useNavigate, useLocation } from "react-router-dom";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";
import { sectionFaq, SectionsType } from "@/assets/constants/app/App.ts";
import { scrollTo } from "@/assets/functions/functions.ts";

//Types
type HeaderNavigationProps = {
  sections: SectionsType;
  headerHeight: number;
  burgerMenuHandler?: () => void;
  isLanguagesOpen?: boolean | null;
  languagesHandler?: () => void;
};

//Styles
const StyledList = styled.ul`
  position: relative;
  z-index: 11;
  ${resetMarginsAndPaddings};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0 2vw;
  min-width: 40vw;
  border-left: 1px solid rgba(255, 255, 255, 0.9);
  border-right: 1px solid rgba(255, 255, 255, 0.9);
  flex-wrap: wrap;

  @media (max-width: ${sizeVariable}) {
    border: none;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  @media (max-width: ${sizeVariable}) {
    margin-top: calc(27vw / 5.09);
    justify-content: start;
    align-self: start;
  }
`;

const StyledButton = styled(CustomButton)`
  background-color: transparent;
  ${resetMarginsAndPaddings};
  ${fontFamilySecond};
  color: rgba(255, 255, 255, 0.9);
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.48px;
  text-align: left;
  max-width: 7vw;

  @media (max-width: ${sizeVariable}) {
    max-width: 20vw;
    font-size: calc(16vw / 5.08);
  }
`;

//Component
export const HeaderNavigation: FC<HeaderNavigationProps> = ({
  sections,
  headerHeight,
  burgerMenuHandler,
  isLanguagesOpen,
  languagesHandler,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const scrollToSection = async (sectionId: string) => {
    if (location.pathname !== "/") {
      await navigate("/");
      scrollTo(0);
    }

    const element = document.getElementById(sectionId);

    if (element) {
      const offset = element.offsetTop - headerHeight;
      scrollTo(offset);
    }

    setIsButtonDisabled(false);
  };

  const scrollToFaqPage = async () => {
    if (location.pathname !== "/faq") {
      await navigate("/faq");
      scrollTo(0);
    }
    // Включаем кнопку
    setIsButtonDisabled(false);
  };

  const onClickHandler = async (sectionId: string) => {
    setIsButtonDisabled(true);

    if (burgerMenuHandler) {
      await burgerMenuHandler();
    }

    if (languagesHandler && isLanguagesOpen) {
      await languagesHandler();
    }

    if (sectionId === sectionFaq) {
      await scrollToFaqPage();
    } else {
      await scrollToSection(sectionId);
    }

    setIsButtonDisabled(false);
  };

  return (
    <nav>
      <StyledList>
        {sections.map((section) => (
          <StyledItem key={section.id}>
            <StyledButton
              disabled={isButtonDisabled}
              type="button"
              onClick={() => onClickHandler(section.id)}
            >
              {section.title}
            </StyledButton>
          </StyledItem>
        ))}
      </StyledList>
    </nav>
  );
};

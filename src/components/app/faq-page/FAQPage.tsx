import { forwardRef, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import {
  FAQItemType,
  FAQPageDataType,
} from "@/assets/constants/app/faq-page/FAQPage.ts";
import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import ReactHtmlParser from "react-html-parser";
import { Navigation } from "@/components/app/common/navigation/Navigation.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { SearchForm } from "@/components/app/faq-page/search-form/SearchForm.tsx";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
import { CustomButton } from "@/components/app/common/customButton/CustomButton.tsx";

const {
  lightBlackColor,
  mediumGreenColor,
  inputColor,
  largeNewsColor,
  darkGreenColor,
} = colorVariables;

//Styles
const StyledPage = styled.main`
  margin-bottom: 7vw;
  min-height: 90vh;
`;

const StyledTitle = styled(SectionTitle)`
  width: 100%;
  margin: 3.33vw 0 1.5vw;
  text-align: start;

  @media (max-width: ${sizeVariable}) {
    margin: 3.33vw 6.4vw 4.51vw;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

const StyledCustomButton = styled(CustomButton)`
  margin: 0.5vw 1.5vw 0 1.5vw;
  display: flex;
  background-color: transparent;

  @media (max-width: ${sizeVariable}) {
    margin: 1.4vw 1.5vw 0 1.5vw;
  }
`;

const StyledImage = styled.img`
  height: calc(11vw / 14.4);
  width: calc(15vw / 14.4);
  display: flex;
  background-color: transparent;

  @media (max-width: ${sizeVariable}) {
    height: calc(11vw / 5.09);
    width: calc(15vw / 5.09);
  }
`;

const StyledAnswer = styled.p`
  ${resetMarginsAndPaddings};
  margin-left: 4vw;
  white-space: pre-line;
  color: ${largeNewsColor};
  ${fontFamily};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.4px;

  a {
    color: ${mediumGreenColor};
  }

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.09);
  }
`;

const StyledContainer = styled.div`
  margin: 0 21.5vw 0 5.4vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${sizeVariable}) {
    margin: 0 5.4vw 0 5.4vw;
  }
`;

const StyledList = styled.ul`
  ${resetMarginsAndPaddings};
  list-style: none;
`;

const StyledItem = styled.li`
  padding: 3.47vw 0;
  border-bottom: 2px solid ${inputColor};

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: ${sizeVariable}) {
    padding: 7vw 0;
  }
`;

const StyledQuestion = styled(Subtitle)<{ $isExpanded: boolean }>`
  color: ${({ $isExpanded }) =>
    $isExpanded ? darkGreenColor : lightBlackColor};
  font-size: calc(25vw / 14.4);
  font-weight: 400;
  line-height: 1;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }
`;

export const FAQPage = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const pageData = useMemo(() => getData("FAQ", t), [t]) as FAQPageDataType;
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const { hideButton, showButton, content, navigation, search, title } =
    pageData;
  const [filteredData, setFilteredData] = useState<FAQItemType[]>(content.list);

  useEffect(() => {
    setFilteredData(content.list);
  }, [content.list]);

  const handleSearch = (searchValue: string) => {
    const newData = content.list.filter(
      (item) =>
        item.question.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  const toggleAnswer = (id: string) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((expandedId) => expandedId !== id)
        : [...prevExpandedIds, id]
    );
  };

  const getButtonLabel = (id: string) => {
    return expandedIds.includes(id) ? hideButton.alt : showButton.alt;
  };

  return (
    <StyledPage ref={ref}>
      <Navigation navigation={navigation} />
      <StyledContainer>
        <StyledTitle color={lightBlackColor}>{title}</StyledTitle>
        <SearchForm search={search} onSearch={handleSearch} />
        {filteredData.length > 0 ? (
          <StyledList>
            {filteredData.map((item) => (
              <StyledItem key={item.id}>
                <StyledWrapper>
                  <StyledCustomButton
                    type="button"
                    disabled={false}
                    onClick={() => toggleAnswer(item.id)}
                    aria-label={getButtonLabel(item.id)}
                  >
                    {expandedIds.includes(item.id) ? (
                      <StyledImage src={hideButton.src} alt={hideButton.alt} />
                    ) : (
                      <StyledImage src={showButton.src} alt={showButton.alt} />
                    )}
                  </StyledCustomButton>
                  <StyledQuestion $isExpanded={expandedIds.includes(item.id)}>
                    {item.question}
                  </StyledQuestion>
                </StyledWrapper>
                {expandedIds.includes(item.id) && (
                  <StyledAnswer>{ReactHtmlParser(item.answer)}</StyledAnswer>
                )}
              </StyledItem>
            ))}
          </StyledList>
        ) : (
          <StyledAnswer>{content.noResult}</StyledAnswer>
        )}
      </StyledContainer>
    </StyledPage>
  );
});

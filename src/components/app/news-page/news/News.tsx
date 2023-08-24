import styled from "styled-components";
import {
  colorVariables,
  fontFamily,
  fontFamilyBold,
  fontFamilyMedium,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Subtitle } from "@/components/app/common/subtitle/Subtitle.tsx";
import { useNavigate } from "react-router-dom";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { newsDataType } from "@/assets/test/newsData.tsx";

const { blackColor, greenColor, smallNewsColor, inputColor } = colorVariables;

//Types
type Props = {
  news: newsDataType;
  title: string;
};
interface StyledSubtitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size: string;
}

//Styles
const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  text-align: left;
  padding: 9.1vw 0 2.5vw 1vw;
  font-size: calc(25vw / 14.4);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.5px;

  @media (max-width: ${sizeVariable}) {
    width: calc(325vw / 5.09);
    font-size: calc(25vw / 5.09);
  }
`;

const NewsPreview = styled.div`
  width: calc(325vw / 14.4);
  box-sizing: border-box;
  margin-bottom: calc(20vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 2px solid ${inputColor};

  @media (max-width: ${sizeVariable}) {
    width: calc(325vw / 5.09);
    margin-bottom: 5vw;
  }
`;

const StyledImage = styled.img<{ size: string }>`
  height: ${({ size }) =>
    size === "big" ? "calc(399vw / 14.4)" : "calc(154vw / 14.4)"};
  width: ${({ size }) =>
    size === "big" ? "calc(899vw / 14.4)" : "calc(325vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${sizeVariable}) {
    height: ${({ size }) =>
      size === "big" ? "calc(184vw / 5.08)" : "calc(148vw / 5.08)"};
    width: ${({ size }) =>
      size === "big" ? "calc(414vw / 5.08)" : "calc(325vw / 5.08)"};
  }
`;

const StyledNewsTitle = styled(Subtitle)<StyledSubtitle>`
  width: 100%;
  margin-bottom: calc(15vw / 14.4);
  ${({ size }) =>
    size === "big" ? `${fontFamilyBold}` : `${fontFamilyMedium}`};
  color: ${({ size }) =>
    size === "big" ? `${blackColor}` : `${smallNewsColor}`};
  font-size: ${({ size }) =>
    size === "big" ? "calc(50vw / 14.4)" : "calc(28vw / 14.4)"};
  line-height: 1.2;
  letter-spacing: -0.7px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: 5vw;
    font-size: ${({ size }) =>
      size === "big" ? "calc(30vw / 5.09)" : "calc(23vw / 5.09)"};
    letter-spacing: -0.6px;
  }
`;

const StyledWrapper = styled.div<{ size: string }>`
  width: 100%;
  margin: ${({ size }) => (size === "big" ? "2vw 0 0.71vw" : "1vw 0 1vw")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    margin: ${({ size }) =>
      size === "big"
        ? "calc(45vw / 5.09) 0 calc(12vw / 5.09)"
        : "calc(12vw / 5.09) 0 calc(12vw / 5.09)"};
  }
`;

const StyledSmallText = styled.p`
  ${resetMarginsAndPaddings};
  ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }
`;

const StyledSpan = styled(StyledSmallText)`
  padding-right: 3vw;
  color: ${greenColor};
  font-size: calc(25vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    font-size: calc(25vw / 5.09);
  }
`;

const StyledDate = styled(StyledSmallText)`
  padding-top: 0.5vw;
  color: ${smallNewsColor};
  font-size: calc(15vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    font-size: calc(15vw / 5.09);
  }
`;

//Component
export const News: FC<Props> = ({ news, title }) => {
  const navigate = useNavigate();
  const onClickHandler = (id: string) => {
    navigate(`/news/${id}`);
  };

  return (
    <StyledContainer>
      <StyledSectionTitle color={blackColor}>{title}</StyledSectionTitle>
      {news.map((news) => (
        <NewsPreview key={news.id} onClick={() => onClickHandler(news.id)}>
          <StyledImage size="small" src={news.url} alt={news.title} />
          <StyledWrapper size="small">
            <StyledSpan>{news.span}</StyledSpan>
            <StyledDate>{news.date}</StyledDate>
          </StyledWrapper>
          <StyledNewsTitle size="small">{news.title}</StyledNewsTitle>
        </NewsPreview>
      ))}
    </StyledContainer>
  );
};

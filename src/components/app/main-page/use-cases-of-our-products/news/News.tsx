import styled from "styled-components";
import { Slide } from "./slide/Slide.tsx";
import { NewsSlider } from "./news-slider/NewsSlider.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import {
  colorVariables,
  coverImage,
  fontFamily,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { newsData } from "@/assets/test/newsData.tsx";
import { FC } from "react";
import { commonImages } from "@/assets/constants/main.ts";
import {
  useCasesOfOurProductsImages,
  NewsType,
} from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";

const { whiteColor, greenColor } = colorVariables;

//Type
type Props = {
  news: NewsType;
};

//Styles
const StyledSection = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${useCasesOfOurProductsImages.newsImages.backgroundL});
  ${coverImage};
  border-radius: 1.6vw;

  @media (max-width: ${sizeVariable}) {
    padding-bottom: 10vw;
    background-image: url(${useCasesOfOurProductsImages.newsImages.backgroundL});
    min-height: calc(1441vw / 5.08);
    border-radius: 3.93vw;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: ${sizeVariable}) {
    padding: 14vw 3.56vw 7.34vw;
  }
`;

const StyledLink = styled(Link)`
  visibility: hidden;
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${greenColor};
  font-size: 1.74vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: -0.5px;

  @media (max-width: ${sizeVariable}) {
    margin-left: 10vw;
    padding-right: 6vw;
    font-size: 4.91vw;
    line-height: 1.7;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0.83vw;
    height: 1.04vw;
    background-image: url(${commonImages.playIconGreen});
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${sizeVariable}) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`;

const BigSlidesContainer = styled.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const SmallSlidesContainer = styled.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: ${sizeVariable}) {
    width: 100%;
  }
`;

export const News: FC<Props> = ({ news }) => {
  const { title, link } = news;
  const newsToRender = newsData;
  const isMobile = useMobileDetection();
  const bigSlides = newsToRender.slice(0, 2);
  const smallSlides = newsToRender.slice(2, 5);

  //Components
  return (
    <StyledSection>
      <StyledWrapper>
        <SectionTitle color={whiteColor}>{title}</SectionTitle>
        <StyledLink
          color={"transparent"}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.value}
        </StyledLink>
      </StyledWrapper>
      <NewsContainer>
        <BigSlidesContainer>
          {bigSlides.map((slide) => (
            <Slide key={slide.id} slide={slide} size="big" />
          ))}
        </BigSlidesContainer>
        {isMobile ? (
          <NewsSlider slides={smallSlides} size="small" />
        ) : (
          <SmallSlidesContainer>
            {smallSlides.map((slide) => (
              <Slide key={slide.id} slide={slide} size="small" />
            ))}
          </SmallSlidesContainer>
        )}
      </NewsContainer>
    </StyledSection>
  );
};

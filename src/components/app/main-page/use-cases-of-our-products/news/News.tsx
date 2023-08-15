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
import { newsHref } from "@/assets/links-href/LinksHref.ts";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { commonImages, newsImages } from "@/assets/constants/constants.ts";

const { whiteColor, greenColor } = colorVariables;

//Data
const news = {
  title: "News",
  button: "Read more",
  slides: [
    {
      id: "1",
      span: "Corporate News",
      date: "20.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: newsImages.one,
    },
    {
      id: "2",
      span: "Corporate News",
      date: "21.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: newsImages.two,
    },
    {
      id: "3",
      span: "Corporate News",
      date: "22.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: newsImages.three,
    },
    {
      id: "4",
      span: "Corporate News",
      date: "23.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: newsImages.four,
    },
    {
      id: "5",
      span: "Corporate News",
      date: "24.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: newsImages.five,
    },
  ],
};

//Styles
const StyledSection = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding-bottom: 5vw;
  min-height: calc(1317vw / 14.4);
  background-image: url(${newsImages.backgroundL});
  ${coverImage};
  border-radius: 1.6vw;

  @media (max-width: ${sizeVariable}) {
    padding-bottom: 10vw;
    background-image: url(${newsImages.backgroundL});
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

export const News = () => {
  const isMobile = useMobileDetection();
  const slides = news.slides;
  const bigSlides = slides.slice(0, 2);
  const smallSlides = slides.slice(2, 5);

  //Components
  return (
    <StyledSection>
      <StyledWrapper>
        <SectionTitle color={whiteColor}>{news.title}</SectionTitle>
        <StyledLink
          color={"transparent"}
          href={newsHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {news.button}
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

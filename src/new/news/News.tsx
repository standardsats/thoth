import styled from "styled-components";
import { Slide } from "./Slide";
import { NewsSlider } from "./news-slider/NewsSlider.tsx";
import { useMobileDetection } from "../../hooks/useMobileDetection.tsx";
import { SectionTitle } from "../common/section-title/SectionTitle.tsx";
import {
  colorVariables,
  coverImage,
  fontFamily,
} from "../../assets/styles/commonStyles.ts";
import { CustomButton } from "../common/button/Button.tsx";

const { whiteColor } = colorVariables;

const StyledSection = styled.div`
  ${coverImage};
  min-height: calc(1317vw / 14.4);
  box-sizing: border-box;
  width: 100%;
  background-image: url("/src/assets/images/news/news-L.svg");

  @media (max-width: 1400px) {
    background-image: url("/src/assets/images/news/news-S.svg");
    min-height: calc(1441vw / 5.08);
  }
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  padding: 5.06vw 3.92vw;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: 1400px) {
    padding: 14vw 3.56vw 7.34vw;
  }
`;

const StyledButton = styled(CustomButton)`
  margin-left: 3.54vw;
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${colorVariables.greenColor};
  font-size: 1.74vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2;
  letter-spacing: -0.5px;

  @media (max-width: 1400px) {
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
    background-image: url("/src/assets/images/products-and-service/play.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: calc(100%);
    top: 60%;
    transform: translateY(-60%);

    @media (max-width: 1400px) {
      width: 2.94vw;
      height: 2.61vw;
    }
  }
`;

const BigSlidesContainer = styled.div`
  width: calc(696vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const SmallSlidesContainer = styled.div`
  width: calc(414vw / 14.4);
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const news = {
  title: "News",
  button: "Read more",
  slides: [
    {
      span: "Corporate News",
      date: "20.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: "/src/assets/images/test/test-photo.jpg",
      alt: "Image",
    },
    {
      span: "Corporate News",
      date: "21.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: "/src/assets/images/test/test-photo.jpg",
      alt: "Image",
    },
    {
      span: "Corporate News",
      date: "22.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: "/src/assets/images/test/test-photo.jpg",
      alt: "Image",
    },
    {
      span: "Corporate News",
      date: "23.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: "/src/assets/images/test/test-photo.jpg",
      alt: "Image",
    },
    {
      span: "Corporate News",
      date: "24.04.2022",
      title: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      text: "Athletic Club and B2BinPay Join Forces in Historic Partnership",
      image: "/src/assets/images/test/test-photo.jpg",
      alt: "Image",
    },
  ],
};

export const News = () => {
  const isMobile = useMobileDetection();
  // Ваш массив со слайдами
  const slides = news.slides;

  // Разделение слайдов на большие и маленькие
  const bigSlides = slides.slice(0, 2);
  const smallSlides = slides.slice(2, 5);

  const ButtonHandler = () => {
    //TODO актуализировть событие
    console.log("Press button Read more");
  };

  return (
    <StyledSection>
      <StyledWrapper>
        <SectionTitle color={whiteColor}>{news.title}</SectionTitle>
        <StyledButton type={"button"} onClick={ButtonHandler}>
          {news.button}
        </StyledButton>
      </StyledWrapper>
      <NewsContainer>
        <BigSlidesContainer>
          {bigSlides.map((slide, index) => (
            <Slide key={index} slide={slide} size="big" />
          ))}
        </BigSlidesContainer>
        {isMobile ? (
          <NewsSlider slides={smallSlides} size="small" />
        ) : (
          <SmallSlidesContainer>
            {smallSlides.map((slide, index) => (
              <Slide key={index} slide={slide} size="small" />
            ))}
          </SmallSlidesContainer>
        )}
      </NewsContainer>
    </StyledSection>
  );
};
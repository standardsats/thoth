import { useParams } from "react-router-dom";
import { newsData } from "@/assets/test/newsData.tsx";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import { NewsPageDataType } from "@/assets/constants/app/news-page/NewsPage.ts";
// import { Rating } from "@/components/app/news-page/rating/Rating.tsx";
import {
  colorVariables,
  fontFamily,
  fontFamilyBold,
  fontFamilyMedium,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { NotFoundPage } from "@/components/app/not-found-page/NotFoundPage.tsx";
import { Share } from "@/components/app/news-page/share/Share.tsx";
import { News } from "@/components/app/news-page/news/News.tsx";
// import { SubscriptionForm } from "@/components/app/news-page/subscription-form/SubscriptionForm.tsx";
import { Navigation } from "@/components/app/common/navigation/Navigation.tsx";

const { smallNewsColor, largeNewsColor, blackColor, lineNewsColor } =
  colorVariables;

interface StyledSubtitle
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size: string;
}

//Styles
const StyledNewsPage = styled.main`
  width: 100%;
`;

const StyledNewsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const SelectedNews = styled.div`
  padding: 2.78vw 3vw 2.78vw 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;

  @media (max-width: ${sizeVariable}) {
    padding: 2.78vw 0;
    align-items: center;
    justify-content: start;
  }
`;

const StyledSectionsContainer = styled.div`
  padding: 2.78vw 0 2.78vw 3vw;
  border-left: 2px solid ${lineNewsColor};
  box-sizing: border-box;
  width: calc(450vw / 14.4);
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${sizeVariable}) {
    padding: 2.78vw 3vw 2.78vw 3vw;
    width: 100%;
    align-items: center;
  }
`;

const StyledImage = styled.img<{ size: string }>`
  background-color: rgba(0, 0, 0, 0.2);
  height: ${({ size }) =>
    size === "big" ? "calc(399vw / 14.4)" : "calc(154vw / 14.4)"};
  width: ${({ size }) =>
    size === "big" ? "calc(880vw / 14.4)" : "calc(325vw / 14.4)"};
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: ${sizeVariable}) {
    height: ${({ size }) =>
      size === "big" ? "calc(200vw / 5.08)" : "calc(148vw / 5.08)"};
    width: ${({ size }) =>
      size === "big" ? "calc(440vw / 5.08)" : "calc(333vw / 5.08)"};
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

const StyledDate = styled(StyledSmallText)`
  padding-top: 0.5vw;
  color: ${smallNewsColor};
  font-size: calc(15vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    font-size: calc(15vw / 5.09);
  }
`;

const StyledText = styled(StyledSmallText)`
  white-space: pre-line;
  margin-top: calc(29vw / 14.4);
  color: ${largeNewsColor};
  font-size: calc(20vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    margin-top: calc(10vw / 5.09);
    font-size: calc(20vw / 5.09);
  }
`;

const StyledTitle = styled.h1<StyledSubtitle>`
  ${resetMarginsAndPaddings};
  width: 100%;
  margin-bottom: calc(18vw / 14.4);
  ${({ size }) =>
    size === "big" ? `${fontFamilyBold}` : `${fontFamilyMedium}`};
  color: ${({ size }) =>
    size === "big" ? `${blackColor}` : `${smallNewsColor}`};
  font-size: ${({ size }) =>
    size === "big" ? "calc(50vw / 14.4)" : "calc(28vw / 14.4)"};
  text-align: left;
  ${fontFamilyBold};
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: ${sizeVariable}) {
    margin-bottom: calc(10vw / 5.09);
    font-size: ${({ size }) =>
      size === "big" ? "calc(30vw / 5.09)" : "calc(23vw / 5.09)"};
  }
`;

const StyledSelectedContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: calc(40vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    width: 86%;
  }
`;

const StyledSelectedContainer = styled.div`
  width: calc(660vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    width: calc(320vw / 5.09);
  }
`;

const StyledSelectedInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;

  @media (max-width: ${sizeVariable}) {
    width: 50vw;
  }
`;

const StyledSelectedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const StyledSelectedSpan = styled(StyledSmallText)`
  padding-left: 0.5vw;
  color: ${smallNewsColor};
  font-size: calc(15vw / 14.4);
  line-height: 1;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(15vw / 5.09);
    padding-left: 1vw;
  }
`;

const StyledSelectedImage = styled.img`
  width: auto;
  height: calc(16vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    width: auto;
    height: calc(16vw / 5.09);
  }
`;

//Component
export const NewsPage = () => {
  const { t } = useTranslation();
  const paigeData = getData("News", t) as NewsPageDataType;
  const { navigation, share, title, time } = paigeData;
  const { id } = useParams();

  const selectedNews = newsData.find((news) => news.id === id);

  useEffect(() => {
    if (selectedNews) {
      console.log(`добавить просмотр новости с ${id}`);
    }
  }, [id, selectedNews]);

  if (!selectedNews) {
    return <NotFoundPage />;
  }

  const remainingNews = newsData.filter((news) => news.id !== id);

  const wordCount = selectedNews.text.split(" ").length;
  const averageReadingSpeed = 250; // Средняя скорость чтения в словах в минуту
  const estimatedReadingTime = Math.ceil(wordCount / averageReadingSpeed);

  return (
    <StyledNewsPage>
      <Navigation navigation={navigation} />
      <StyledNewsContainer>
        <SelectedNews>
          <StyledImage
            size="big"
            src={selectedNews.url}
            alt={selectedNews.title}
          />
          <StyledSelectedContent>
            <StyledDate>{selectedNews.date}</StyledDate>
            <StyledSelectedContainer>
              <StyledTitle size="big">{selectedNews.title}</StyledTitle>
              <StyledSelectedInfo>
                {/*<Rating*/}
                {/*  id={selectedNews.id}*/}
                {/*  initialValue={selectedNews.rating}*/}
                {/*  ratingData={rating}*/}
                {/*/>*/}
                {/*<StyledSelectedWrapper>*/}
                {/*  <StyledSelectedImage src={views.src} alt={views.alt} />*/}
                {/*  <StyledSelectedSpan>{selectedNews.views}</StyledSelectedSpan>*/}
                {/*</StyledSelectedWrapper>*/}
                <StyledSelectedWrapper>
                  <StyledSelectedImage src={time.src} alt={time.alt} />
                  <StyledSelectedSpan>
                    {estimatedReadingTime} {paigeData.time.text}
                  </StyledSelectedSpan>
                </StyledSelectedWrapper>
              </StyledSelectedInfo>
              <StyledText>{selectedNews.text}</StyledText>
            </StyledSelectedContainer>
          </StyledSelectedContent>
        </SelectedNews>
        <StyledSectionsContainer>
          {/*<SubscriptionForm subscribe={subscribe} />*/}
          <Share selectedNews={selectedNews} share={share} />
          <News news={remainingNews} title={title} />
        </StyledSectionsContainer>
      </StyledNewsContainer>
    </StyledNewsPage>
  );
};

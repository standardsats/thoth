import { FC } from "react";
import styled from "styled-components";
import {
  colorVariables,
  coverImage,
  divWithBackground,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import { Fees } from "./fees/Fees.tsx";
import { MobileSlider } from "./mobile-slider/MobileSlider.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { Slide } from "./slide/Slide.tsx";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";
import { DescriptionTHOH } from "@/components/app/common/descriptionTHOH/descriptionTHOH.tsx";
import { News } from "./news/News.tsx";
import { HaveAQuestion } from "./have-a-question/HaveAQuestion.tsx";
import { getData } from "@/assets/constants/constants.ts";
import { useTranslation } from "react-i18next";
import {
  useCasesOfOurProductsImages,
  UseCasesOfOurProductsType,
} from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";

const { whiteColor } = colorVariables;

//Type
type Props = {
  id: string;
  title: string;
};

//Styles
const StyledDescription = styled.section`
  box-sizing: border-box;
  width: 100vw;
  min-height: calc(850vw / 14.4);
  padding: 4.28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${useCasesOfOurProductsImages.backgroundL});
  ${coverImage};
  //border-radius: 1.6vw;
  border-radius: 0 0 1.6vw 1.6vw;

  @media (max-width: ${sizeVariable}) {
    padding: 14.17vw 0 12.4vw 0;
    box-sizing: border-box;
    min-height: 138.78vw;
    justify-content: space-between;
    flex-direction: column;
    background-image: url(${useCasesOfOurProductsImages.backgroundS});
    //border-radius: 3.93vw;
    border-radius: 0 0 3.93vw 3.93vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledDescriptionTHOH = styled(DescriptionTHOH)`
  margin: 1vw 0 2.57vw;

  @media (max-width: ${sizeVariable}) {
    margin: 1.76vw 0 0;
  }
`;

const StyledMonitor = styled.div`
  margin-top: 2.57vw;
  padding: 4.93vw 6.25vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;
  width: 88.47vw;
  min-height: 37.15vw;
  ${divWithBackground};
  background-image: url(${useCasesOfOurProductsImages.slides.background});
  border-radius: 30px;

  @media (max-width: ${sizeVariable}) {
    display: block;
    padding: 0;
    background-image: none;
  }
`;

//Component
export const UseCasesOfOurProducts: FC<Props> = ({ id, title }) => {
  const { t } = useTranslation();
  const sectionData = getData(
    "UseCasesOfOurProducts",
    t
  ) as UseCasesOfOurProductsType;
  const {
    text,
    subtitle,
    slides,
    photoSlideArrowRight,
    fees,
    news,
    questions,
  } = sectionData;
  const isMobile = useMobileDetection();

  return (
    <section id={id}>
      <StyledDescription>
        <StyledContainer>
          <SectionTitle color={whiteColor}>{title}</SectionTitle>
          <StyledDescriptionTHOH color={whiteColor}>
            {text}
          </StyledDescriptionTHOH>
        </StyledContainer>
        <StyledMonitor>
          {isMobile ? (
            <MobileSlider
              subtitle={subtitle}
              slides={slides}
              photoSlideArrowRight={photoSlideArrowRight}
            />
          ) : (
            slides.map((card) => (
              <Slide key={card.id} subtitle={subtitle} slide={card} />
            ))
          )}
        </StyledMonitor>
      </StyledDescription>
      <Fees fees={fees} />
      <News news={news} />
      <HaveAQuestion questions={questions} />
    </section>
  );
};

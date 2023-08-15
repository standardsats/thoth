import styled from "styled-components";
import {
  divWithBackground,
  fontFamily,
  sizeVariable,
  TextMixin,
} from "@/assets/styles/commonStyles.ts";
import { colorVariables } from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { SlideSubtitle } from "@/components/app/common/slide-subtitle/SlideSubtitle.tsx";
import { SlideData } from "../ProductsAndServices.tsx";
import { FC } from "react";
import {
  slide1Href,
  slide2Href,
  slide3Href,
  slide4Href,
} from "@/assets/links-href/LinksHref.ts";
import { Link } from "@/components/app/common/Link/Link.tsx";
import {
  commonImages,
  productsAndServiceSlideImages,
} from "@/assets/constants/constants.ts";

const { greenColor } = colorVariables;

//Types
type Props = {
  slide: SlideData;
};

//Styles
const StyledWrapper = styled.div`
  width: 100%;

  @media (max-width: ${sizeVariable}) {
    width: 82.41vw;
    margin-right: 7.66vw;
    height: 100%;
    display: flex;
  }
`;

const StyledSlide = styled.div`
  margin-top: 2.57vw;
  padding: 0 0 0 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 82.25vw;
  ${divWithBackground};
  background-image: url(${productsAndServiceSlideImages.backgroundL});
  border-radius: 30px;

  @media (max-width: ${sizeVariable}) {
    margin-top: 0;
    padding: 8.86vw 4.53vw;
    justify-content: start;
    flex-direction: column;
    width: 82.41vw;
    height: 100%;
    background-image: url(${productsAndServiceSlideImages.backgroundS});
  }
`;

const StyledText = styled.p`
  ${TextMixin};
  margin: 6.74vw 0 2.57vw;

  @media (max-width: ${sizeVariable}) {
    margin: 12.95vw 0 4.32vw;
  }
`;

const StyledSlideContent = styled.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: ${sizeVariable}) {
    margin: 0 auto;
    width: 70vw;
    box-sizing: border-box;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  padding-right: 1.43vw;
  width: fit-content;
  background: transparent;
  color: ${greenColor};
  font-size: 1.74vw;
  ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.5px;

  @media (max-width: ${sizeVariable}) {
    padding-right: 6vw;
    font-size: 4.91vw;
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

const StyledImageContainer = styled.div`
  height: 20vw;
  width: 40vw;
  padding: 5.24vw 4vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  display: block;

  @media (max-width: ${sizeVariable}) {
    margin: 0;
    padding: 6vw 0 0 0;
    height: 30vw;
    width: 70vw;
    object-position: center top;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

//Component
export const Slide: FC<Props> = ({ slide }) => {
  const isMobile = useMobileDetection();

  const handleHref = (id: string) => {
    switch (id) {
      case "1":
        return slide1Href;
      case "2":
        return slide2Href;
      case "3":
        return slide3Href;
      case "4":
        return slide4Href;
      default:
        return "";
    }
  };

  return (
    <StyledWrapper>
      <StyledSlide>
        {isMobile && <SlideSubtitle>{slide.subtitle}</SlideSubtitle>}
        <StyledSlideContent>
          <StyledText>{slide.textContent}</StyledText>
          <StyledLink
            color={"transparent"}
            href={handleHref(slide.id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {slide.button}
          </StyledLink>
        </StyledSlideContent>
        <StyledImageContainer>
          <StyledImage src={slide.image.src} alt={slide.image.alt} />
        </StyledImageContainer>
      </StyledSlide>
    </StyledWrapper>
  );
};
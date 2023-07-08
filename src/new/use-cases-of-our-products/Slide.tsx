import React from "react";
import styled from "styled-components";
import { colorVariables } from "../../assets/styles/commonStyles.ts";
import { Subtitle } from "../subtitle/Subtitle.tsx";
import { CustomText } from "../text/Text.tsx";

type SlideProps = {
  button?: string;
  image: string;
  title: string;
  text: string;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledImage = styled.img`
  margin-right: 2.15vw;
  max-width: 2.98vw;
  height: auto;
`;

const StyledCardTitle = styled(Subtitle)`
  text-align: left;
  font-weight: 500;
  letter-spacing: normal;

  ${({ $margin, fontSize, $lineheight }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
  `}
`;

const StyledCardText = styled(CustomText)`
  font-weight: 300;

  ${({ $lineheight, $margin, fontSize, $textalign }) => `
    line-height: ${$lineheight};
    margin: ${$margin};
    font-size: ${fontSize};
    text-align: ${$textalign}
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;


// const StyledWrapper = styled.div`
//   width: 82.25vw;
//
//   @media (max-width: 1400px) {
//     background-image: url("/src/assets/images/use-cases-of-our-products/slide-S.svg");
//     height: auto;
//     display: flex;
//   }
// `;
//
// const StyledSlide = styled.div`
//   margin-top: 2.57vw;
//   padding: 0 0 0 6vw;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: stretch;
//   width: 82.25vw;
//   ${divWithBackground};
//   //background-image: url("/src/assets/images/products-and-service/item-L.svg");
//   border-radius: 30px;
//
//   @media (max-width: 1400px) {
//     border-radius: 0;
//     width: 100%;
//   }
// `;


export const Slide: React.FC<SlideProps> = ({ button, image, title, text }) => {
  return (
    <StyledCard>
      {button && (
        <Subtitle
          color={colorVariables.whiteColor}
          fontSize={"4.9vw"}
          $lineheight={"1.5"}
          $margin={"0"}
        >
          {button}
        </Subtitle>
      )}
      <StyledWrapper>
        <StyledImage src={image} alt={title} />
        <StyledCardTitle
          color={colorVariables.whiteColor}
          $margin={"0"}
          fontSize={"1.53vw"}
          $lineheight={"1.5"}
        >
          {title}
        </StyledCardTitle>
      </StyledWrapper>
      <StyledCardText
        color={colorVariables.whiteColor}
        fontSize={"1.39vw"}
        $lineheight={"1.2"}
        $margin={"0"}
        $textalign={"left"}
        $letter={"-0.4px"}
      >
        {text}
      </StyledCardText>
    </StyledCard>
    // <StyledWrapper>
    //   <StyledSlide>
    //     <h1>{button}</h1>
    //     <div>
    //       <img src={image} alt={title} />
    //       <p>{title}</p>
    //     </div>
    //     <p>{text}</p>
    //   </StyledSlide>
    // </StyledWrapper>
  );
};
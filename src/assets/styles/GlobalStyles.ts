import { createGlobalStyle } from "styled-components";

export const SliderStyles = createGlobalStyle`
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    margin: 0;
    height: inherit !important;

    &.slick-slide {
      > div {
        height: 100%;
      }
    }
  }
`;

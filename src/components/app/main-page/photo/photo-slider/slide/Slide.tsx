import { FC, ReactNode } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import styled from "styled-components";

//Types
type Props = {
  index: string;
  children: ReactNode;
};

//Styles
const StyledSlide = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
`;

//Component
export const Slide: FC<Props> = ({ children, index }) => {
  const isMobile = useMobileDetection();
  const parsedIndex = parseInt(index);

  let width = "";
  let height = "";

  if (isMobile) {
    height =
      parsedIndex % 3 === 0
        ? "50vw"
        : parsedIndex % 3 === 1
        ? "57.28vw"
        : "44.49vw";
    width =
      parsedIndex % 3 === 0
        ? "58.26vw"
        : parsedIndex % 3 === 1
        ? "66.14vw"
        : "52.36vw";
  } else {
    height =
      parsedIndex % 3 === 0
        ? "50vw"
        : parsedIndex % 3 === 1
        ? "55.83vw"
        : "44.44vw";
    width =
      parsedIndex % 3 === 0
        ? "56.91vw"
        : parsedIndex % 3 === 1
        ? "64.44vw"
        : "51.11vw";
  }
  return <StyledSlide style={{ height, width }}>{children}</StyledSlide>;
};

import { FC, ReactNode } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import styled from "styled-components";

//Types
type Props = {
  index: number;
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

  let width;
  let height;

  if (isMobile) {
    height = index % 3 === 0 ? "50vw" : index % 3 === 1 ? "57.28vw" : "44.49vw";
    width =
      index % 3 === 0 ? "58.26vw" : index % 3 === 1 ? "66.14vw" : "52.36vw";
  } else {
    height = index % 3 === 0 ? "50vw" : index % 3 === 1 ? "55.83vw" : "44.44vw";
    width =
      index % 3 === 0 ? "56.91vw" : index % 3 === 1 ? "64.44vw" : "51.11vw";
  }
  return <StyledSlide style={{ height, width }}>{children}</StyledSlide>;
};

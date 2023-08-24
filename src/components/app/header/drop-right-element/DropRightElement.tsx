import styled, { css } from "styled-components";
import { FC, ReactNode, useLayoutEffect } from "react";
import {
  sizeVariable,
  slideInAnimation,
  slideOutAnimation,
} from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";
import { useLocation } from "react-router-dom";

//Type
type Props = {
  containerHeight: number;
  headerHeight: number;
  isOpen: boolean | null;
  children: ReactNode;
};

//Styles
const StyledDropRight = styled.div<{ $isOpen: boolean | null }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  background: rgba(23, 42, 68, 0.6);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  position: absolute;
  top: 0;
  right: -100%;
  width: 23.5%;
  z-index: 100;

  ${({ $isOpen }) =>
    $isOpen !== null
      ? $isOpen
        ? css`
            animation: ${slideInAnimation} 0.5s forwards;
          `
        : css`
            animation: ${slideOutAnimation} 0.5s forwards;
          `
      : ""};

  @media (max-width: ${sizeVariable}) {
    width: 60%;
  }
`;

//Component
export const DropRightElement: FC<Props> = ({
  containerHeight,
  headerHeight,
  children,
  isOpen,
}) => {
  //TODO
  //нужно поменять при изменении роутинга
  const location = useLocation();
  const isMobile = useMobileDetection();
  const isMainPage = location.pathname === "/";

  useLayoutEffect(() => {
    const updateMenuDropRight = () => {
      const menuDropRightElements = document.querySelectorAll(
        ".drop-right"
      ) as NodeListOf<HTMLElement>;

      menuDropRightElements.forEach((element) => {
        element.style.height = `calc(${containerHeight}px + ${headerHeight}px + ${
          !isMobile && isMainPage ? 1.7 : 0
        }vw)`;
      });
    };
    updateMenuDropRight();
    window.addEventListener("resize", updateMenuDropRight);

    return () => {
      window.removeEventListener("resize", updateMenuDropRight);
    };
  }, [containerHeight, headerHeight, isMobile]);

  return (
    <StyledDropRight className="drop-right" $isOpen={isOpen}>
      {children}
    </StyledDropRight>
  );
};

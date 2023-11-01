import styled, { css } from "styled-components";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import {
  sizeVariable,
  slideInAnimation,
  slideOutAnimation,
} from "@/assets/styles/commonStyles.ts";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";

//Type
type DropRightElementProps = {
  isOpen: boolean | null;
  children: ReactNode;
};

//Styles
const StyledDropRight = styled.div<{ $isOpen: boolean | null }>`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: rgba(23, 42, 68, 0.6);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  width: 23.5%;
  z-index: 100;
  position: fixed;
  top: 0;
  height: auto;
  right: -100%;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${slideInAnimation} 0.5s forwards;
    `}
  ${({ $isOpen }) =>
    !$isOpen &&
    $isOpen !== null &&
    css`
      animation: ${slideOutAnimation} 0.5s forwards;
    `};

  @media (max-width: ${sizeVariable}) {
    width: 60%;
  }
`;

const ScrollableContent = styled.div<{ $scrollEnabled: boolean }>`
  width: 100%;
  max-height: ${({ $scrollEnabled }) => ($scrollEnabled ? "100vh" : "none")};
  overflow-y: ${({ $scrollEnabled }) => ($scrollEnabled ? "auto" : "visible")};
`;

//Component
export const DropRightElement: FC<DropRightElementProps> = ({ children, isOpen }) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const containerHeightRef = useRef<HTMLDivElement>(null);

  const isMobile = useMobileDetection();

  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerHeightRef.current) {
        const containerHeight = containerHeightRef.current.clientHeight;
        setContainerHeight(containerHeight);
      }
    };
    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (isOpen !== null) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        if (containerHeight >= window.innerHeight) {
          setScrollEnabled(true);
        } else {
          setScrollEnabled(false);
        }
      } else {
        document.body.style.overflow = "auto";
        setScrollEnabled(false);
      }
    }
  }, [isOpen, isMobile, containerHeight]);

  return (
    <StyledDropRight
      ref={containerHeightRef}
      className="drop-right"
      $isOpen={isOpen}
    >
      <ScrollableContent $scrollEnabled={scrollEnabled}>
        {children}
      </ScrollableContent>
    </StyledDropRight>
  );
};

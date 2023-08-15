import { useState, useEffect, useRef, useCallback, ReactNode, FC } from "react";
import styled from "styled-components";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";

const { scrollColor } = colorVariables;

//Types
type Props = {
  children: ReactNode;
};

// Styles
const ScrollbarContainer = styled.div`
  position: relative;
  height: 40vw;
  overflow: hidden;

  @media (max-width: ${sizeVariable}) {
    width: 95%;
    height: 120vw;
  }
`;

const ScrollbarContent = styled.div`
  height: 100%;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollbarTrack = styled.div`
  position: absolute;
  top: 2.2vw;
  right: 2.75vw;
  bottom: 2.2vw;
  width: 3px;
  background-color: ${scrollColor};

  @media (max-width: ${sizeVariable}) {
    top: 6vw;
    bottom: 6vw;
    right: 3.75vw;
  }
`;

const ScrollbarThumb = styled.div<{
  $isDragging: boolean;
  $translateY: number;
}>`
  user-select: none;
  position: absolute;
  top: 2.2vw;
  right: calc(2.75vw - 4px); /* Центрируем бегунок по горизонтали */
  background-color: ${scrollColor};
  width: 11px;
  height: 7%;
  min-height: 30px;
  border-radius: 5px;
  touch-action: none;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  transform: ${({ $translateY }) => `translateY(${$translateY}px)`};

  @media (max-width: ${sizeVariable}) {
    top: 6vw;
    right: calc(3.75vw - 4px);
  }
`;

//Component
export const Scrollbar: FC<Props> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const scrollPercentageRef = useRef<number>(0);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleThumbMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleThumbMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleThumbMouseMove = useCallback(
    (e: MouseEvent) => {
      if (
        isDragging &&
        contentRef.current &&
        scrollThumbRef.current &&
        scrollTrackRef.current
      ) {
        const { clientHeight, scrollHeight } = contentRef.current;
        const { clientHeight: trackHeight } = scrollTrackRef.current;
        const contentScrollRange = scrollHeight - clientHeight;
        const trackScrollRange =
          trackHeight - scrollThumbRef.current.clientHeight;
        const mouseDelta =
          e.clientY - scrollTrackRef.current.getBoundingClientRect().top;
        const thumbDelta = (mouseDelta / trackScrollRange) * contentScrollRange;
        const newScrollPercentage = Math.max(
          0,
          Math.min((scrollPercentage + thumbDelta) / contentScrollRange, 1)
        );
        setScrollPercentage(newScrollPercentage);
        contentRef.current.scrollTop = newScrollPercentage * contentScrollRange;
      }
    },
    [isDragging, scrollPercentage, contentRef, scrollThumbRef, scrollTrackRef]
  );

  const handleThumbTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleThumbTouchMove = useCallback(
    (e: TouchEvent) => {
      if (
        isDragging &&
        contentRef.current &&
        scrollThumbRef.current &&
        scrollTrackRef.current
      ) {
        const { clientHeight, scrollHeight } = contentRef.current;
        const { clientHeight: trackHeight } = scrollTrackRef.current;
        const contentScrollRange = scrollHeight - clientHeight;
        const trackScrollRange =
          trackHeight - scrollThumbRef.current.clientHeight;
        const touchDelta =
          e.touches[0].clientY -
          scrollTrackRef.current.getBoundingClientRect().top;
        const thumbDelta = (touchDelta / trackScrollRange) * contentScrollRange;
        const newScrollPercentage = Math.max(
          0,
          Math.min((scrollPercentage + thumbDelta) / contentScrollRange, 1)
        );
        setScrollPercentage(newScrollPercentage);
        contentRef.current.scrollTop = newScrollPercentage * contentScrollRange;
      }
    },
    [isDragging, scrollPercentage, contentRef, scrollThumbRef, scrollTrackRef]
  );

  const handleThumbTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleThumbMouseMove);
      document.addEventListener("mouseup", handleThumbMouseUp);
      document.addEventListener("touchmove", handleThumbTouchMove);
      document.addEventListener("touchend", handleThumbTouchEnd);
    } else {
      document.removeEventListener("mousemove", handleThumbMouseMove);
      document.removeEventListener("mouseup", handleThumbMouseUp);
      document.removeEventListener("touchmove", handleThumbTouchMove);
      document.removeEventListener("touchend", handleThumbTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleThumbMouseMove);
      document.removeEventListener("mouseup", handleThumbMouseUp);
      document.removeEventListener("touchmove", handleThumbTouchMove);
      document.removeEventListener("touchend", handleThumbTouchEnd);
    };
  }, [
    isDragging,
    handleThumbMouseMove,
    handleThumbMouseUp,
    handleThumbTouchMove,
    handleThumbTouchEnd,
  ]);

  useEffect(() => {
    const currentRef = contentRef.current;

    const handleScroll = () => {
      if (currentRef) {
        const { scrollTop, scrollHeight, clientHeight } = currentRef;
        const contentScrollRange = scrollHeight - clientHeight;
        scrollPercentageRef.current = scrollTop / contentScrollRange;
      }
    };

    currentRef?.addEventListener("scroll", handleScroll);

    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTranslateY = (
    scrollPercentage: number,
    trackHeight: number,
    thumbHeight: number
  ): number => {
    return scrollPercentage * (trackHeight - thumbHeight);
  };

  return (
    <ScrollbarContainer>
      <ScrollbarContent ref={contentRef}>{children}</ScrollbarContent>
      <ScrollbarTrack ref={scrollTrackRef} />
      <ScrollbarThumb
        ref={scrollThumbRef}
        onMouseDown={handleThumbMouseDown}
        onTouchStart={handleThumbTouchStart}
        $isDragging={isDragging}
        $translateY={calculateTranslateY(
          scrollPercentage,
          scrollTrackRef.current?.clientHeight ?? 0,
          scrollThumbRef.current?.clientHeight ?? 0
        )}
      />
    </ScrollbarContainer>
  );
};

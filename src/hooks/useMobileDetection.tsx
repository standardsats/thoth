import { useState, useEffect } from "react";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= parseInt(sizeVariable));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

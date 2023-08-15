import "./App.css";
import { Header } from "@/components/app/header/Header.tsx";
import { Footer } from "@/components/app/footer/Footer.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n.ts";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "@/components/app/main-page/MainPage.tsx";
import { PaymentFeesPage } from "@/components/app/payment-fees-page/PaymentFeesPage.tsx";
import { GlobalStyles } from "@/assets/styles/GlobalStyles.ts";
import { NotFoundPage } from "@/components/app/not-found-page/NotFoundPage.tsx";
import { useMobileDetection } from "@/hooks/useMobileDetection.tsx";

const sections = [
  { id: "1", title: "How it Works" },
  { id: "2", title: "Photo" },
  { id: "3", title: "Products and Services" },
  { id: "4", title: "Use Cases of Our Products" },
];

const StyledContainer = styled.div<{
  $isBurgerMenuOpen: boolean | null;
  $isLanguagesOpen: boolean | null;
  $containerHeight: number;
  $headerHeight: number;
  $isMobile: boolean | null;
}>`
  max-height: ${({
    $isBurgerMenuOpen,
    $containerHeight,
    $headerHeight,
    $isLanguagesOpen,
    $isMobile,
  }) =>
    ($isBurgerMenuOpen || $isLanguagesOpen) &&
    $containerHeight < window.innerHeight
      ? `calc(${window.innerHeight}px - ${$headerHeight}px + ${
          $isMobile ? 0 : 1.7
        }vw)`
      : ($isBurgerMenuOpen || $isLanguagesOpen) &&
        $containerHeight >= window.innerHeight
      ? `${$containerHeight}px`
      : "auto"};
  overflow: ${({ $isBurgerMenuOpen, $isLanguagesOpen }) =>
    $isBurgerMenuOpen || $isLanguagesOpen ? "clip" : "auto"};
`;

export const App = () => {
  const mainScreenRef = useRef<HTMLElement>(null);
  const paymentFeesRef = useRef<HTMLElement>(null);
  const headerHeightRef = useRef<HTMLElement>(null);

  const [isLanguagesOpen, setIsLanguagesOpen] = useState<null | boolean>(null);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<null | boolean>(
    null
  );
  const [mainScreenHeight, setMainScreenHeight] = useState<number>(0);
  const [paymentFeesHeight, setPaymentFeesHeight] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const isMobile = useMobileDetection();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, []);

  useEffect(() => {
    const updateMainScreenHeight = () => {
      if (mainScreenRef.current) {
        const mainScreenHeight = mainScreenRef.current.clientHeight;
        setMainScreenHeight(mainScreenHeight);
      }
    };

    updateMainScreenHeight();

    window.addEventListener("resize", updateMainScreenHeight);

    return () => {
      window.removeEventListener("resize", updateMainScreenHeight);
    };
  }, [mainScreenRef, isBurgerMenuOpen, isLanguagesOpen]);

  useEffect(() => {
    const updatePaymentFeesHeight = () => {
      if (paymentFeesRef.current) {
        const paymentFeesHeight = paymentFeesRef.current.clientHeight;
        setPaymentFeesHeight(paymentFeesHeight);
      }
    };

    updatePaymentFeesHeight();

    window.addEventListener("resize", updatePaymentFeesHeight);

    return () => {
      window.removeEventListener("resize", updatePaymentFeesHeight);
    };
  }, [paymentFeesRef, isBurgerMenuOpen, isLanguagesOpen]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerHeightRef.current) {
        const headerHeight = headerHeightRef.current.clientHeight;
        setHeaderHeight(headerHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [headerHeightRef, isBurgerMenuOpen, isLanguagesOpen]);

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const languagesHandler = () => {
    setIsLanguagesOpen(!isLanguagesOpen);
    setIsBurgerMenuOpen(false);
    if (!isLanguagesOpen) {
      scrollTop();
    }
  };

  const burgerMenuHandler = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    if (!isBurgerMenuOpen) {
      scrollTop();
    }
  };

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <Header
          ref={headerHeightRef}
          headerHeight={headerHeight}
          isLanguagesOpen={isLanguagesOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
          languagesHandler={languagesHandler}
          burgerMenuHandler={burgerMenuHandler}
          containerHeight={mainScreenHeight || paymentFeesHeight}
          paymentFeesHeight={paymentFeesHeight}
          sections={sections}
        />
        <StyledContainer
          className="styled-container"
          $isBurgerMenuOpen={isBurgerMenuOpen}
          $containerHeight={mainScreenHeight || paymentFeesHeight}
          $isMobile={isMobile}
          $isLanguagesOpen={isLanguagesOpen}
          $headerHeight={headerHeight}
        >
          <Routes>
            <Route
              path="thoth"
              element={<MainPage mainScreenRef={mainScreenRef} />}
            />
            <Route
              path="thoth/payment-fees"
              element={<PaymentFeesPage ref={paymentFeesRef} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </StyledContainer>
      </I18nextProvider>
    </BrowserRouter>
  );
};

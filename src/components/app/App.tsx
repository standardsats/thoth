import styled from "styled-components";
import { I18nextProvider } from "react-i18next";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "@/components/app/main-page/MainPage.tsx";
import { PaymentFeesPage } from "@/components/app/payment-fees-page/PaymentFeesPage.tsx";
import { GlobalStyles } from "@/assets/styles/GlobalStyles.ts";
import { NotFoundPage } from "@/components/app/not-found-page/NotFoundPage.tsx";
import { useTranslation } from "react-i18next";
import { getData } from "@/assets/constants/constants.ts";
import i18n from "@/i18n.ts";
import { Header } from "@/components/app/header/Header.tsx";
import { Footer } from "@/components/app/footer/Footer.tsx";
import { FAQPage } from "@/components/app/faq-page/FAQPage.tsx";
import { NewsPage } from "@/components/app/news-page/NewsPage.tsx";
import { SectionsType } from "@/assets/constants/app/App.ts";
import { baseName } from "@/assets/constants/main.ts";

//Styles
const StyledContainer = styled.div<{
  $isBurgerMenuOpen: boolean | null;
  $isLanguagesOpen: boolean | null;
  $containerHeight: number;
  $headerHeight: number;
}>`
  max-height: ${({
    $isBurgerMenuOpen,
    $containerHeight,
    $headerHeight,
    $isLanguagesOpen,
  }) =>
    ($isBurgerMenuOpen || $isLanguagesOpen) &&
    $containerHeight < window.innerHeight
      ? `calc(${window.innerHeight}px - ${$headerHeight}px)`
      : ($isBurgerMenuOpen || $isLanguagesOpen) &&
        $containerHeight >= window.innerHeight
      ? `${$containerHeight}px`
      : "auto"};
  overflow: ${({ $isBurgerMenuOpen, $isLanguagesOpen }) =>
    $isBurgerMenuOpen || $isLanguagesOpen ? "clip" : "auto"};
`;

//Component
export const App = () => {
  const headerHeightRef = useRef<HTMLElement>(null);
  const mainScreenRef = useRef<HTMLElement>(null);
  const paymentFeesRef = useRef<HTMLElement>(null);
  const notFoundRef = useRef<HTMLElement>(null);
  const newsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const [isLanguagesOpen, setIsLanguagesOpen] = useState<null | boolean>(null);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<null | boolean>(
    null
  );
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [mainScreenHeight, setMainScreenHeight] = useState<number>(0);
  const [paymentFeesHeight, setPaymentFeesHeight] = useState<number>(0);
  const [notFoundHeight, setNotFoundHeight] = useState<number>(0);
  const [newsHeight, setNewsHeight] = useState<number>(0);
  const [faqHeight, setFaqHeight] = useState<number>(0);

  const { t } = useTranslation();
  const sections = getData("Sections", t) as SectionsType;

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, []);

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
      setMainScreenHeight(0);
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
      setPaymentFeesHeight(0);
    };
  }, [paymentFeesRef, isBurgerMenuOpen, isLanguagesOpen]);

  useEffect(() => {
    const updateNotFoundHeight = () => {
      if (notFoundRef.current) {
        const notFoundHeight = notFoundRef.current.clientHeight;
        setNotFoundHeight(notFoundHeight);
      }
    };

    updateNotFoundHeight();

    window.addEventListener("resize", updateNotFoundHeight);

    return () => {
      window.removeEventListener("resize", updateNotFoundHeight);
      setNotFoundHeight(0);
    };
  }, [notFoundRef, isBurgerMenuOpen, isLanguagesOpen]);

  useEffect(() => {
    const updateNewsHeight = () => {
      if (newsRef.current) {
        const newsHeight = newsRef.current.clientHeight;
        setNewsHeight(newsHeight);
      }
    };

    updateNewsHeight();

    window.addEventListener("resize", updateNewsHeight);

    return () => {
      window.removeEventListener("resize", updateNewsHeight);
      setNewsHeight(0);
    };
  }, [newsRef, isBurgerMenuOpen, isLanguagesOpen]);

  useEffect(() => {
    const updateFaqHeight = () => {
      if (faqRef.current) {
        const faqHeight = faqRef.current.clientHeight;
        setFaqHeight(faqHeight);
      }
    };

    updateFaqHeight();

    window.addEventListener("resize", updateFaqHeight);

    return () => {
      window.removeEventListener("resize", updateFaqHeight);
      setFaqHeight(0);
    };
  }, [faqRef, isBurgerMenuOpen, isLanguagesOpen]);

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const languagesHandler = () => {
    setIsLanguagesOpen(!isLanguagesOpen);
    if (isBurgerMenuOpen) {
      burgerMenuHandler();
    }
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
    <BrowserRouter basename={`${baseName}/`}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <Header
          ref={headerHeightRef}
          headerHeight={headerHeight}
          isLanguagesOpen={isLanguagesOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
          languagesHandler={languagesHandler}
          burgerMenuHandler={burgerMenuHandler}
          containerHeight={
            mainScreenHeight ||
            paymentFeesHeight ||
            notFoundHeight ||
            newsHeight ||
            faqHeight
          }
          paymentFeesHeight={paymentFeesHeight}
          sections={sections}
        />
        <StyledContainer
          className="styled-container"
          $isBurgerMenuOpen={isBurgerMenuOpen}
          $containerHeight={
            mainScreenHeight ||
            paymentFeesHeight ||
            notFoundHeight ||
            newsHeight ||
            faqHeight
          }
          $isLanguagesOpen={isLanguagesOpen}
          $headerHeight={headerHeight}
        >
          <Routes>
            <Route
              path="/"
              element={
                <MainPage mainScreenRef={mainScreenRef} sections={sections} />
              }
            />
            <Route
              path="/payment-fees"
              element={<PaymentFeesPage ref={paymentFeesRef} />}
            />
            <Route path="/news/:id" element={<NewsPage ref={newsRef} />} />
            <Route path="/faq" element={<FAQPage ref={faqRef} />} />
            <Route path="*" element={<NotFoundPage ref={notFoundRef} />} />
          </Routes>
          <Footer />
        </StyledContainer>
      </I18nextProvider>
    </BrowserRouter>
  );
};

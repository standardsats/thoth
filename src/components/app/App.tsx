import { I18nextProvider } from "react-i18next";
import "./App.css";
import { useEffect } from "react";
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
import { DeleteAccountPage } from "@/components/app/delete-accoun-page/DeleteAccountPage.tsx";

//Component
export const App = () => {
  const { t } = useTranslation();
  const sections = getData("Sections", t) as SectionsType;

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, []);

  return (
    <BrowserRouter basename={`${baseName}/`}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        <Header sections={sections} />
        <Routes>
          <Route path="/" element={<MainPage sections={sections} />} />
          <Route path="/payment-fees" element={<PaymentFeesPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/delete" element={<DeleteAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </I18nextProvider>
    </BrowserRouter>
  );
};

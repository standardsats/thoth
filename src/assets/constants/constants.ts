import { TFunction } from "i18next";
import {
  newsPageData,
  NewsPageDataType,
} from "@/assets/constants/app/news-page/NewsPage.ts";
import {
  faqPageData,
  FAQPageDataType,
} from "@/assets/constants/app/faq-page/FAQPage.ts";
import {
  getHeaderData,
  HeaderType,
} from "@/assets/constants/app/header/Header.ts";
import {
  getMainScreenData,
  MainScreenType,
} from "@/assets/constants/app/main-page/MainScreen.ts";
import {
  getHowItWorksData,
  HowItWorksType,
} from "@/assets/constants/app/main-page/HowItWorks.ts";
import {
  getPhotoData,
  PhotoType,
} from "@/assets/constants/app/main-page/Photo.ts";
import { getLogoData, LogoType } from "@/assets/constants/app/common/Logo.ts";
import { getAppData, SectionsType } from "@/assets/constants/app/App.ts";
import {
  FeedbackWidgetsType,
  getFeedbackWidgetsData,
} from "@/assets/constants/app/common/FeedbackWidgets.ts";
import {
  getNotFoundPageData,
  NotFoundType,
} from "@/assets/constants/app/not-found-page/NotFoundPage.ts";
import {
  getProductAndServiceData,
  ProductAndServiceType,
} from "@/assets/constants/app/main-page/ProductAndService.ts";
import {
  getUseCasesOfOurProductsData,
  UseCasesOfOurProductsType,
} from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";
import {
  getPaymentFeesData,
  PaymentFeesType,
} from "@/assets/constants/app/payment-fees-page/PaymentFeesPage.ts";
import {
  FooterType,
  getFooterData,
} from "@/assets/constants/app/footer/Footer.ts";

type Name =
  | "Sections"
  | "Header"
  | "MainScreen"
  | "HowItWorks"
  | "Photo"
  | "ProductAndService"
  | "UseCasesOfOurProducts"
  | "Footer"
  | "PaymentFees"
  | "News"
  | "FAQ"
  | "NotFound"
  | "Logo"
  | "FeedbackWidgets";

// sectionData.ts
type Data =
  | SectionsType
  | HeaderType
  | MainScreenType
  | HowItWorksType
  | PhotoType
  | ProductAndServiceType
  | UseCasesOfOurProductsType
  | FooterType
  | PaymentFeesType
  | NewsPageDataType
  | NotFoundType
  | LogoType
  | FeedbackWidgetsType
  | FAQPageDataType
  | null;

export const getData = (name: Name, t: TFunction): Data => {
  switch (name) {
    case "Sections":
      return getAppData(t);
    case "Header":
      return getHeaderData(t);
    case "MainScreen":
      return getMainScreenData(t);
    case "HowItWorks":
      return getHowItWorksData(t);
    case "Photo":
      return getPhotoData(t);
    case "ProductAndService":
      return getProductAndServiceData();
    case "UseCasesOfOurProducts":
      return getUseCasesOfOurProductsData();
    case "Footer":
      return getFooterData();
    case "PaymentFees":
      return getPaymentFeesData(t);
    case "News":
      return newsPageData();
    case "FAQ":
      return faqPageData();
    case "NotFound":
      return getNotFoundPageData(t);
    case "Logo":
      return getLogoData(t);
    case "FeedbackWidgets":
      return getFeedbackWidgetsData(t);
    default:
      return null;
  }
};

import { TFunction } from "i18next";
import {
  getNewsPageData,
  NewsPageData,
} from "@/assets/constants/app/news-page/NewsPage.ts";
import {
  getHeaderData,
  HeaderData,
} from "@/assets/constants/app/header/Header.ts";
import {
  getMainScreenData,
  MainScreenData,
} from "@/assets/constants/app/main-page/MainScreen.ts";
import {
  getHowItWorksData,
  HowItWorksData,
} from "@/assets/constants/app/main-page/HowItWorks.ts";
// import {
//   getPhotoData,
//   PhotoData,
// } from "@/assets/constants/app/main-page/Photo.ts";
import { getLogoData, LogoData } from "@/assets/constants/app/common/Logo.ts";
import { getAppData, SectionsType } from "@/assets/constants/app/App.ts";
import {
  FeedbackWidgetsData,
  getFeedbackWidgetsData,
} from "@/assets/constants/app/common/FeedbackWidgets.ts";
import {
  getNotFoundPageData,
  NotFoundData,
} from "@/assets/constants/app/not-found-page/NotFoundPage.ts";
import {
  getProductAndServiceData,
  ProductAndServiceType,
} from "@/assets/constants/app/main-page/ProductAndService.ts";
import {
  getUseCasesOfOurProductsData,
  UseCasesOfOurProductsData,
} from "@/assets/constants/app/main-page/UseCasesOfOurProducts.ts";
import {
  getPaymentFeesData,
  PaymentFeesData,
} from "@/assets/constants/app/payment-fees-page/PaymentFeesPage.ts";
import {
  FooterData,
  getFooterData,
} from "@/assets/constants/app/footer/Footer.ts";
import {
  DeleteAccountPageData,
  getDeleteAccountPageData,
} from "@/assets/constants/app/delete-account-page/DeleteAccountPage.ts";
import {
  FAQPageData,
  getFAQPageData,
} from "@/assets/constants/app/faq-page/FAQPage.ts";

type Name =
  | "Sections"
  | "Header"
  | "MainScreen"
  | "HowItWorks"
  // | "Photo"
  | "ProductAndService"
  | "UseCasesOfOurProducts"
  | "Footer"
  | "PaymentFees"
  | "News"
  | "FAQ"
  | "DeleteAccount"
  | "NotFound"
  | "Logo"
  | "FeedbackWidgets";

// sectionData.ts
type Data =
  | SectionsType
  | HeaderData
  | MainScreenData
  | HowItWorksData
  //  | PhotoData
  | ProductAndServiceType
  | UseCasesOfOurProductsData
  | FooterData
  | PaymentFeesData
  | NewsPageData
  | NotFoundData
  | LogoData
  | FeedbackWidgetsData
  | DeleteAccountPageData
  | FAQPageData
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
    // case "Photo":
    //   return getPhotoData(t);
    case "ProductAndService":
      return getProductAndServiceData(t);
    case "UseCasesOfOurProducts":
      return getUseCasesOfOurProductsData(t);
    case "Footer":
      return getFooterData(t);
    case "PaymentFees":
      return getPaymentFeesData(t);
    case "News":
      return getNewsPageData(t);
    case "FAQ":
      return getFAQPageData(t);
    case "DeleteAccount":
      return getDeleteAccountPageData(t);
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

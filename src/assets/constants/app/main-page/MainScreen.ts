import { TFunction } from "i18next";
import { baseName } from "@/assets/constants/main.ts";

export type MainScreenType = {
  span: string;
  title: string;
  text: string;
  button: string;
};

export const mainScreenImages = {
  backgroundL: `${baseName}/images/main-page/main-screen/screen-L.svg`,
  backgroundS: `${baseName}/images/main-page/main-screen/screen-S.svg`,
  coinsL: `${baseName}/images/main-page/main-screen/coins-L.svg`,
  coinsS: `${baseName}/images/main-page/main-screen/coins-S.svg`,
  circle: `${baseName}/images/main-page/main-screen/circle.svg`,
  wrapper: `${baseName}/images/main-page/main-screen/wrapper.svg`,
};

export const getMainScreenData = (t: TFunction) => {
  return {
    span: t("mainScreen.span"),
    title: t("mainScreen.title"),
    text: t("mainScreen.text"),
    button: t("mainScreen.button"),
  };
};

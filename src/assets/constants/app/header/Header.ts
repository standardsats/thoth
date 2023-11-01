import { TFunction } from "i18next";
import { baseName, commonImages, Image } from "@/assets/constants/main.ts";

export const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
];

export type LoginAndRegisterData = {
  signUp: string;
  signIn: string;
};

export type LanguageData = Image & {
  srcGray: string;
  text: string;
};

export type MenuData = Image & {
  text: string;
};

export type CloseIconData = Image;

export type HeaderData = {
  loginAndRegister: LoginAndRegisterData;
  closeIcon: CloseIconData;
  language: LanguageData;
  menu: MenuData;
};

export const headerIcon = {
  checkMark: `${baseName}/images/header/check-mark.svg`,
  closeIcon: `${baseName}/${commonImages.playIconWhite}`,
  language: `${baseName}/images/header/language-icon-white.svg`,
  languageGray: `${baseName}/images/header/language-icon-gray.svg`,
  menu: `${baseName}/images/header/burger-icon.svg`,
};

export const getHeaderData = (t: TFunction) => {
  return {
    loginAndRegister: {
      signUp: t("header.loginAndRegister.signUp"),
      signIn: t("header.loginAndRegister.signIn"),
    },
    closeIcon: {
      src: headerIcon.closeIcon,
      alt: t("header.closeIcon"),
    },
    language: {
      src: headerIcon.language,
      srcGray: headerIcon.languageGray,
      alt: t("header.language.alt"),
      text: t("header.language.text"),
    },
    menu: {
      src: headerIcon.menu,
      alt: t("header.menu.alt"),
      text: t("header.menu.text"),
    },
  };
};

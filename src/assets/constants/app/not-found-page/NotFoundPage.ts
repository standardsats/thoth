import { TFunction } from "i18next";
import { baseName, ImageType } from "@/assets/constants/main.ts";

export type NotFoundNavigationType = {
  button: string;
  separator: string;
  location: string;
};

export type NotFoundImageType = ImageType;

export type NotFoundType = {
  navigation: NotFoundNavigationType;
  title: string;
  subtitle: string;
  image: NotFoundImageType;
  text: string;
  button: string;
};

export const notFoundPageImages = `${baseName}/images/not-found-page/off.svg`;

export const getNotFoundPageData = (t: TFunction) => {
  return {
    navigation: {
      button: t("pageNotFound.navigation.button"),
      separator: ">",
      location: t("pageNotFound.navigation.location"),
    },
    title: "404",
    subtitle: t("pageNotFound.subtitle"),
    image: {
      src: notFoundPageImages,
      alt: t("pageNotFound.imageAlt"),
    },
    text: t("pageNotFound.text"),
    button: t("pageNotFound.button"),
  };
};

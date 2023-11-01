import { TFunction } from "i18next";
import { baseName, Image, Navigate } from "@/assets/constants/main.ts";

export type NotFoundImageData = Image;

export type NotFoundData = {
  navigation: Navigate;
  title: string;
  subtitle: string;
  image: NotFoundImageData;
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

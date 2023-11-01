import { TFunction } from "i18next";
import { baseName, Image } from "@/assets/constants/main.ts";

export type LogoData = Image;

export const logoImages = {
  logo: `${baseName}/images/common/logo.svg`,
};

export const getLogoData = (t: TFunction) => {
  return {
    src: logoImages.logo,
    alt: t("logo.alt"),
  };
};

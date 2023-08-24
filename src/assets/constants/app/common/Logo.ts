import { TFunction } from "i18next";
import { baseName, ImageType } from "@/assets/constants/main.ts";

export type LogoType = ImageType;

export const logoImages = {
  logo: `${baseName}/images/common/logo.svg`,
};

export const getLogoData = (t: TFunction) => {
  return {
    src: logoImages.logo,
    alt: t("logo.alt"),
  };
};

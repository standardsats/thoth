import { TFunction } from "i18next";
import { baseName } from "@/assets/constants/main.ts";
import {
  emailHref,
  facebookHref,
  telegramHref,
  twitterHref,
} from "@/assets/links-href/LinksHref.ts";

export type SocialImageData = {
  darkSrc?: string;
  lightSrc?: string;
  alt: string;
};

export type SocialData = {
  id: string;
  image: SocialImageData;
  href: string;
};

export type FeedbackWidgetsData = SocialData[];

export const feedbackWidgetsImages = {
  telegramDark: `${baseName}/images/common/telegram-dark.svg`,
  telegramLight: `${baseName}/images/common/telegram-light.svg`,
  twitterDark: `${baseName}/images/common/twitter-dark.svg`,
  twitterLight: `${baseName}/images/common/twitter-light.svg`,
  facebookDark: `${baseName}/images/common/facebook-dark.svg`,
  facebookLight: `${baseName}/images/common/facebook-light.svg`,
  instagramDark: `${baseName}/images/common/instagram-dark.svg`,
  emailDark: `${baseName}/images/common/email-dark.svg`,
  emailLight: `${baseName}/images/common/email-light.svg`,
};

export const getFeedbackWidgetsData = (t: TFunction) => {
  return [
    {
      id: "telegram",
      image: {
        darkSrc: feedbackWidgetsImages.telegramDark,
        lightSrc: feedbackWidgetsImages.telegramLight,
        alt: t("feedbackWidgets.telegram"),
      },
      href: telegramHref,
    },
    {
      id: "twitter",
      image: {
        darkSrc: feedbackWidgetsImages.twitterDark,
        lightSrc: feedbackWidgetsImages.twitterLight,
        alt: t("feedbackWidgets.twitter"),
      },
      href: twitterHref,
    },
    {
      id: "facebook",
      image: {
        darkSrc: feedbackWidgetsImages.facebookDark,
        lightSrc: feedbackWidgetsImages.facebookLight,
        alt: t("feedbackWidgets.facebook.svg"),
      },
      href: facebookHref,
    },
    // {
    //   id: "instagram",
    //   image: {
    //     darkSrc: feedbackWidgetsImages.instagram,
    //     alt: t("feedbackWidgets.instagram"),
    //   },
    //   href: instagramHref,
    // },
    {
      id: "email",
      image: {
        darkSrc: feedbackWidgetsImages.emailDark,
        lightSrc: feedbackWidgetsImages.emailLight,
        alt: t("feedbackWidgets.email"),
      },
      href: emailHref,
    },
  ];
};

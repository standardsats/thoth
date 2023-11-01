import { generateUniqueId } from "@/assets/functions/functions.ts";
import { baseName, Image, Navigate } from "@/assets/constants/main.ts";
import { TFunction } from "i18next";

export const twitterId = generateUniqueId();
export const facebookId = generateUniqueId();
export const emailId = generateUniqueId();

export type RatingData = {
  active: Image;
  inactive: Image;
};

export type SubscribeData = {
  title: string;
  placeholder: string;
  button: string;
  validation: {
    empty: string;
    invalid: string;
  };
};

export type ShareData = {
  title: string;
  links: Array<Image & { id: string }>;
  image: Image;
};

export type NewsPageData = {
  // rating: RatingData;
  time: Image & { text: string };
  // views: Image;
  navigation: Navigate;
  // subscribe: SubscribeData;
  share: ShareData;
  title: string;
};

export const newsImages = {
  active: `${baseName}/images/news-page/rating/star-active.svg`,
  inactive: `${baseName}/images/news-page/rating/star-inactive.svg`,
  time: `${baseName}/images/news-page/time.svg`,
  views: `${baseName}/images/news-page/views.svg`,
  twitter: `${baseName}/images/news-page/share/twitter.svg`,
  facebook: `${baseName}/images/news-page/share/facebook.svg`,
  email: `${baseName}/images/news-page/share/email.svg`,
  chain: `${baseName}/images/news-page/share/chain.svg`,
};

export const getNewsPageData = (t: TFunction) => {
  return {
    navigation: {
      button: t("pageNews.navigation.button"),
      separator: ">",
      location: t("pageNews.navigation.location"),
    },
    // rating: {
    //   active: {
    //     src: newsImages.active,
    //     alt: "active star",
    //   },
    //   inactive: {
    //     src: newsImages.inactive,
    //     alt: "inactive star",
    //   },
    // },
    time: {
      text: t("pageNews.time.text"),
      src: newsImages.time,
      alt: t("pageNews.time.alt"),
    },
    // views: {
    //   src: newsImages.views,
    //   alt: "views icon",
    // },
    // subscribe: {
    //   title: "Subscribe",
    //   placeholder: "Subscribe to our newsletter",
    //   button: "Submit",
    //   validation: {
    //     empty: "Email is required",
    //     invalid: "Invalid email address",
    //   },
    // },
    share: {
      title: t("pageNews.share.title"),
      links: [
        {
          id: twitterId,
          src: newsImages.twitter,
          alt: t("pageNews.share.twitterAlt"),
        },
        {
          id: facebookId,
          src: newsImages.facebook,
          alt: t("pageNews.share.facebookAlt"),
        },
        {
          id: emailId,
          src: newsImages.email,
          alt: t("pageNews.share.emailAlt"),
        },
      ],
      image: {
        src: newsImages.chain,
        alt: t("pageNews.share.chainAlt"),
      },
    },
    title: t("pageNews.title"),
  };
};

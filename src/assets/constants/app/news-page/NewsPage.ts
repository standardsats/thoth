import { generateUniqueId } from "@/assets/functions/functions.ts";
import { baseName, ImageType } from "@/assets/constants/main.ts";

export const twitterId = generateUniqueId();
export const facebookId = generateUniqueId();
export const emailId = generateUniqueId();

export type NavigationType = {
  button: string;
  separator: string;
  location: string;
};

export type RatingType = {
  active: ImageType;
  inactive: ImageType;
};

export type SubscribeType = {
  title: string;
  placeholder: string;
  button: string;
  validation: {
    empty: string;
    invalid: string;
  };
};

export type ShareType = {
  title: string;
  links: Array<ImageType & { id: string }>;
  image: ImageType;
};

export type NewsPageDataType = {
  rating: RatingType;
  time: ImageType & { text: string };
  views: ImageType;
  navigation: NavigationType;
  subscribe: SubscribeType;
  share: ShareType;
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

export const newsPageData = () => {
  return {
    navigation: {
      button: "Accept bitcoin payment",
      separator: ">",
      location: "News",
    },
    rating: {
      active: {
        src: newsImages.active,
        alt: "active star",
      },
      inactive: {
        src: newsImages.inactive,
        alt: "inactive star",
      },
    },
    time: {
      text: "min",
      src: newsImages.time,
      alt: "time icon",
    },
    views: {
      src: newsImages.views,
      alt: "views icon",
    },
    subscribe: {
      title: "Subscribe",
      placeholder: "Subscribe to our newsletter",
      button: "Submit",
      validation: {
        empty: "Email is required",
        invalid: "Invalid email address",
      },
    },
    share: {
      title: "Share this article",
      links: [
        {
          id: twitterId,
          src: newsImages.twitter,
          alt: "twitter icon",
        },
        {
          id: facebookId,
          src: newsImages.facebook,
          alt: "facebook icon",
        },
        {
          id: emailId,
          src: newsImages.email,
          alt: "email icon",
        },
      ],
      image: {
        src: newsImages.chain,
        alt: "chain icon",
      },
    },
    title: "News",
  };
};

//import { TFunction } from "i18next";
import { baseName, ImageType } from "@/assets/constants/main.ts";
import { generateUniqueId } from "@/assets/functions/functions.ts";
import {
  contactTeamHref,
  getSupportHref,
  newsHref,
} from "@/assets/links-href/LinksHref.ts";

export type UseCasesOfOurProductsSlideType = {
  id: string;
  image: ImageType;
  title: string;
  text: string;
};

export type photoSlideArrowRightType = {
  src: string;
  alt: string;
};

export type FeesType = {
  title: string;
  lineOne: {
    title: string;
    text: {
      main: string;
      span: string;
      button: string;
    };
  };
  lineTwo: {
    title: string;
    text: {
      main: string;
    };
  };
};

export type QuestionsType = {
  title: string;
  text: string;
  existing: {
    image: ImageType;
    title: string;
    text: string;
    linkName: string;
    href: string;
  };
  new: {
    image: ImageType;
    title: string;
    text: string;
    linkName: string;
    href: string;
  };
};

export type NewsType = {
  title: string;
  link: {
    value: string;
    href: string;
  };
};

export type UseCasesOfOurProductsType = {
  text: string;
  subtitle: string;
  slides: UseCasesOfOurProductsSlideType[];
  photoSlideArrowRight: photoSlideArrowRightType;
  fees: FeesType;
  news: NewsType;
  questions: QuestionsType;
};

export const useCasesOfOurProductsImages = {
  backgroundL: `${baseName}/images/main-page/use-cases-of-our-products/background-L.svg`,
  backgroundS: `${baseName}/images/main-page/use-cases-of-our-products/background-S.svg`,
  background: `${baseName}/images/main-page/use-cases-of-our-products/mobile-slider/background-S.svg`,
  newsImages: {
    backgroundL:
      "images/main-page/use-cases-of-our-products/news/background-L.svg",
    backgroundS:
      "images/main-page/use-cases-of-our-products/news/background-S.svg",
  },
  haveAQuestion: {
    existingClient: `${baseName}/images/main-page/use-cases-of-our-products/have-a-question/existing-client.svg`,
    newClient: `${baseName}/images/main-page/use-cases-of-our-products/have-a-question/new-client.svg`,
  },
  slides: {
    background: `${baseName}/images/main-page/use-cases-of-our-products/slide.svg`,
    slideOne: `${baseName}/images/main-page/use-cases-of-our-products/merchantsSolutionOne.svg`,
    slideTwo: `${baseName}/images/main-page/use-cases-of-our-products/merchantsSolutionTwo.svg`,
    slideThree: `${baseName}/images/main-page/use-cases-of-our-products/merchantsSolutionThree.svg`,
    slideFour: `${baseName}/images/main-page/use-cases-of-our-products/merchantsSolutionFour.svg`,
    slideFive: `${baseName}/images/main-page/use-cases-of-our-products/merchantsSolutionFive.svg`,
    slideSix: `${baseName}/images/main-page/use-cases-of-our-products/merchantsSolutionSix.svg`,
  },
  sliderArrow: `${baseName}/images/main-page/use-cases-of-our-products/mobile-slider/slider-button.svg`,
};

export const getUseCasesOfOurProductsData = () => {
  return {
    text: "Product Description THOTH",
    subtitle: "Merchants Solution",
    slides: [
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideOne,
          alt: "icon one",
        },
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideTwo,
          alt: "icon two",
        },
        title: "E-commerce",
        text: "The world of e-commerce has experienced massive growth. Reap the benefits of the huge online market by accepting crypto payments.",
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideThree,
          alt: "icon three",
        },
        title: "Marketplaces",
        text: "There are many platforms used by businesses to sell their products or services. Offering crypto payments to customers is now the advantage.",
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideFour,
          alt: "icon four",
        },
        title: "Travel Industry",
        text: "The travel industry is a growing sector. With increasing bookings now made online, it makes financial sense to accept crypto payments.",
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideFive,
          alt: "icon five",
        },
        title: "Gambling",
        text: "The global online gambling industry is worth billions of dollars. Crypto payments are part for the course.",
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideSix,
          alt: "icon six",
        },
        title: "FOREX & CFD Brokers",
        text: "Attract new clients by offering them a way to top up their accounts with many different cryptocurrencies.",
      },
    ],
    photoSlideArrowRight: {
      src: useCasesOfOurProductsImages.sliderArrow,
      alt: "arrow right",
    },
    fees: {
      title: "Fees",
      lineOne: {
        title: "Incoming Transactions",
        text: {
          main: "As low as 0.5%",
          span: "and going down based on your total transaction volume.",
          button: "Check pricing details",
        },
      },
      lineTwo: {
        title: "Outgoing Transactions",
        text: {
          main: "Free of charge",
        },
      },
    },
    news: {
      title: "News",
      link: {
        value: "Read more",
        href: newsHref,
      },
    },
    questions: {
      title: "Have a question?",
      text: "Explore our solutions or you can contact us through ticket system and contact form. Feel free to get in touch..",
      existing: {
        image: {
          src: useCasesOfOurProductsImages.haveAQuestion.existingClient,
          alt: "existing client",
        },
        title: "For existing clients",
        text: "If you already have an account please use our ticket system.",
        linkName: "Get 24\\7 Support",
        href: getSupportHref,
      },
      new: {
        image: {
          src: useCasesOfOurProductsImages.haveAQuestion.newClient,
          alt: "new client",
        },
        title: "For new clients or partners",
        text: "Please leave your inquiry and our Business Development Team will contact you shortly.",
        linkName: "Contact BD Team",
        href: contactTeamHref,
      },
    },
  };
};

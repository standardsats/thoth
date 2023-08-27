import { baseName, ImageType } from "@/assets/constants/main.ts";
import { generateUniqueId } from "@/assets/functions/functions.ts";
import {
  contactTeamHref,
  getSupportHref,
  newsHref,
} from "@/assets/links-href/LinksHref.ts";
import { TFunction } from "i18next";

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

export const getUseCasesOfOurProductsData = (t: TFunction) => {
  return {
    text: t("sectionUseCasesOfOurProducts.text"),
    subtitle: t("sectionUseCasesOfOurProducts.subtitle"),
    slides: [
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideOne,
          alt: t("sectionUseCasesOfOurProducts.slideOne.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.slideOne.title"),
        text: t("sectionUseCasesOfOurProducts.slideOne.text"),
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideTwo,
          alt: t("sectionUseCasesOfOurProducts.slideTwo.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.slideTwo.title"),
        text: t("sectionUseCasesOfOurProducts.slideTwo.text"),
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideThree,
          alt: t("sectionUseCasesOfOurProducts.slideThree.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.slideThree.title"),
        text: t("sectionUseCasesOfOurProducts.slideThree.text"),
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideFour,
          alt: t("sectionUseCasesOfOurProducts.slideFour.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.slideFour.title"),
        text: t("sectionUseCasesOfOurProducts.slideFour.text"),
      },
      {
        id: generateUniqueId(),
        image: {
          src: useCasesOfOurProductsImages.slides.slideFive,
          alt: t("sectionUseCasesOfOurProducts.slideFive.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.slideFive.title"),
        text: t("sectionUseCasesOfOurProducts.slideFive.text"),
      },
    ],
    photoSlideArrowRight: {
      src: useCasesOfOurProductsImages.sliderArrow,
      alt: t("sectionUseCasesOfOurProducts.photoSlideArrowRightAlt"),
    },
    fees: {
      title: t("sectionUseCasesOfOurProducts.fees.title"),
      lineOne: {
        title: t("sectionUseCasesOfOurProducts.fees.lineOne.title"),
        text: {
          main: t("sectionUseCasesOfOurProducts.fees.lineOne.text.main"),
          span: t("sectionUseCasesOfOurProducts.fees.lineOne.text.span"),
          button: t("sectionUseCasesOfOurProducts.fees.lineOne.text.button"),
        },
      },
      lineTwo: {
        title: t("sectionUseCasesOfOurProducts.fees.lineTwo.title"),
        text: {
          main: t("sectionUseCasesOfOurProducts.fees.lineTwo.text.main"),
        },
      },
    },
    news: {
      title: t("sectionUseCasesOfOurProducts.news.title"),
      link: {
        value: t("sectionUseCasesOfOurProducts.news.link"),
        href: newsHref,
      },
    },
    questions: {
      title: t("sectionUseCasesOfOurProducts.questions.title"),
      text: t("sectionUseCasesOfOurProducts.questions.text"),
      existing: {
        image: {
          src: useCasesOfOurProductsImages.haveAQuestion.existingClient,
          alt: t("sectionUseCasesOfOurProducts.questions.existing.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.questions.existing.title"),
        text: t("sectionUseCasesOfOurProducts.questions.existing.text"),
        linkName: t("sectionUseCasesOfOurProducts.questions.existing.linkName"),
        href: getSupportHref,
      },
      new: {
        image: {
          src: useCasesOfOurProductsImages.haveAQuestion.newClient,
          alt: t("sectionUseCasesOfOurProducts.questions.new.alt"),
        },
        title: t("sectionUseCasesOfOurProducts.questions.new.title"),
        text: t("sectionUseCasesOfOurProducts.questions.new.text"),
        linkName: t("sectionUseCasesOfOurProducts.questions.new.linkName"),
        href: contactTeamHref,
      },
    },
  };
};

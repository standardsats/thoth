import { generateUniqueId } from "@/assets/functions/functions.ts";
import { baseName, ImageType } from "@/assets/constants/main.ts";
import { TFunction } from "i18next";

export type FAQItemType = {
  id: string;
  question: string;
  answer: string;
};

export type FAQNavigationType = {
  button: string;
  separator: string;
  location: string;
};

export type FAQSearchType = {
  placeholder: string;
  imageSearch: ImageType;
  imageClose: ImageType;
};

export type FAQPageDataType = {
  title: string;
  search: FAQSearchType;
  hideButton: ImageType;
  showButton: ImageType;
  content: {
    noResult: string;
    list: FAQItemType[];
  };
  navigation: FAQNavigationType;
};

export const faqImages = {
  search: `${baseName}/images/faq-page/search-form/search-icon.svg`,
  close: `${baseName}/images/faq-page/search-form/close-icon.svg`,
  hide: `${baseName}/images/faq-page/hide-icon.svg`,
  show: `${baseName}/images/faq-page/show-icon.svg`,
};

export const faqPageData = (t: TFunction) => {
  return {
    title: t("pageFaq.title"),
    navigation: {
      button: t("pageFaq.navigation.button"),
      separator: ">",
      location: t("pageFaq.navigation.location"),
    },
    search: {
      placeholder: t("pageFaq.search.placeholder"),
      imageSearch: {
        src: faqImages.search,
        alt: t("pageFaq.search.searchAlt"),
      },
      imageClose: {
        src: faqImages.close,
        alt: t("pageFaq.close.closeAlt"),
      },
    },
    hideButton: {
      src: faqImages.hide,
      alt: t("pageFaq.hideButtonAlt"),
    },
    showButton: {
      src: faqImages.show,
      alt: t("pageFaq.showButtonAlt"),
    },
    content: {
      noResult: t("pageFaq.content.noResult"),
      list: [
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionOne"),
          answer: t("pageFaq.content.answerOne"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionTwo"),
          answer: t("pageFaq.content.answerTwo"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionThree"),
          answer: t("pageFaq.content.answerThree"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionFour"),
          answer: t("pageFaq.content.answerFour"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionFive"),
          answer: t("pageFaq.content.answerFive"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionSix"),
          answer: t("pageFaq.content.answerSix"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionSeven"),
          answer: t("pageFaq.content.answerSeven"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionEight"),
          answer: t("pageFaq.content.answerEight"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionNine"),
          answer: t("pageFaq.content.answerNine"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionTen"),
          answer: t("pageFaq.content.answerTen"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionEleven"),
          answer: t("pageFaq.content.answerEleven"),
        },
        {
          id: generateUniqueId(),
          question: t("pageFaq.content.questionTwelve"),
          answer: t("pageFaq.content.answerTwelve"),
        },
      ],
    },
  };
};

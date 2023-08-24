import { TFunction } from "i18next";
import { baseName, ImageType } from "@/assets/constants/main.ts";
import { generateUniqueId } from "@/assets/functions/functions.ts";

export type AdvantageType = {
  id: string;
  subtitle: string;
  text: string;
  image: string;
  alt: string;
};

export type StepType = {
  image: ImageType;
  subtitle: string;
  text: string;
};

export type HowItWorksType = {
  text: string;
  stepOne: StepType;
  stepTwo: StepType;
  stepThree: StepType;
  advantages: AdvantageType[];
};

export const howItWorksImages = {
  backgroundL: `${baseName}/images/main-page/how-it-works/background-L.svg`,
  backgroundS: `${baseName}/images/main-page/how-it-works/background-S.svg`,
  leftLineL: `${baseName}/images/main-page/how-it-works/left-line-L.svg`,
  leftLineS: `${baseName}/images/main-page/how-it-works/left-line-S.svg`,
  rightLineL: `${baseName}/images/main-page/how-it-works/right-line-L.svg`,
  rightLineS: `${baseName}/images/main-page/how-it-works/right-line-S.svg`,
  stepOne: `${baseName}/images/main-page/how-it-works/send-invoice.svg`,
  stepTwo: `${baseName}/images/main-page/how-it-works/payment.svg`,
  stepThree: `${baseName}/images/main-page/how-it-works/broadcast.svg`,
  advantages: {
    backgroundL: `${baseName}/images/main-page/how-it-works/advantages/background-L.svg`,
    backgroundS: `${baseName}/images/main-page/how-it-works/advantages/background-S.svg`,
    one: `${baseName}/images/main-page/how-it-works/advantages/first-icon.svg`,
    two: `${baseName}/images/main-page/how-it-works/advantages/second-icon.svg`,
    three: `${baseName}/images/main-page/how-it-works/advantages/third-icon.svg`,
    four: `${baseName}/images/main-page/how-it-works/advantages/fourth-icon.svg`,
  },
};

export const getHowItWorksData = (t: TFunction) => {
  return {
    text: t("sectionHowItWorks.text"),
    stepOne: {
      image: {
        src: howItWorksImages.stepOne,
        alt: t("sectionHowItWorks.stepOne.alt"),
      },
      subtitle: t("sectionHowItWorks.stepOne.subtitle"),
      text: t("sectionHowItWorks.stepOne.text"),
    },
    stepTwo: {
      image: {
        src: howItWorksImages.stepTwo,
        alt: t("sectionHowItWorks.stepTwo.alt"),
      },
      subtitle: t("sectionHowItWorks.stepTwo.subtitle"),
      text: t("sectionHowItWorks.stepTwo.text"),
    },
    stepThree: {
      image: {
        src: howItWorksImages.stepThree,
        alt: t("sectionHowItWorks.stepThree.alt"),
      },
      subtitle: t("sectionHowItWorks.stepThree.subtitle"),
      text: t("sectionHowItWorks.stepThree.text"),
    },
    advantages: [
      {
        id: generateUniqueId(),
        subtitle: t("sectionHowItWorks.advantages.advantage1.subtitle"),
        text: t("sectionHowItWorks.advantages.advantage1.text"),
        image: howItWorksImages.advantages.one,
        alt: t("sectionHowItWorks.advantages.advantage1.alt"),
      },
      {
        id: generateUniqueId(),
        subtitle: t("sectionHowItWorks.advantages.advantage2.subtitle"),
        text: t("sectionHowItWorks.advantages.advantage2.text"),
        image: howItWorksImages.advantages.two,
        alt: t("sectionHowItWorks.advantages.advantage2.alt"),
      },
      {
        id: generateUniqueId(),
        subtitle: t("sectionHowItWorks.advantages.advantage3.subtitle"),
        text: t("sectionHowItWorks.advantages.advantage3.text"),
        image: howItWorksImages.advantages.three,
        alt: t("sectionHowItWorks.advantages.advantage3.alt"),
      },
      {
        id: generateUniqueId(),
        subtitle: t("sectionHowItWorks.advantages.advantage4.subtitle"),
        text: t("sectionHowItWorks.advantages.advantage4.text"),
        image: howItWorksImages.advantages.four,
        alt: t("sectionHowItWorks.advantages.advantage4.alt"),
      },
    ],
  };
};

import { generateUniqueId } from "@/assets/functions/functions.ts";
import { TFunction } from "i18next";
import {Navigate} from "@/assets/constants/main.ts";

export type StepData = {
  id: string;
  step: string;
};

export type DeleteAccountPageData = {
  title: string;
  description: string;
  steps: StepData[];
  navigation: Navigate;
};

export const getDeleteAccountPageData = (t: TFunction) => {
  return {
    title: t("pageDeleteAccount.title"),
    navigation: {
      button: t("pageDeleteAccount.navigation.button"),
      separator: ">",
      location: t("pageDeleteAccount.navigation.location"),
    },
    description: t("pageDeleteAccount.description"),
    steps: [
      {
        id: generateUniqueId(),
        step: t("pageDeleteAccount.steps.stepOne"),
      },
      {
        id: generateUniqueId(),
        step: t("pageDeleteAccount.steps.stepTwo"),
      },
      {
        id: generateUniqueId(),
        step: t("pageDeleteAccount.steps.stepThree"),
      },
      {
        id: generateUniqueId(),
        step: t("pageDeleteAccount.steps.stepFour"),
      },
    ],
  };
};

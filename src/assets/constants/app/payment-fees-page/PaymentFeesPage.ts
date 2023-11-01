import { TFunction } from "i18next";
import {
  enterpriseHref,
  individualHref,
} from "@/assets/links-href/LinksHref.ts";
import { Navigate } from "@/assets/constants/main.ts";

export type PaymentFeesData = {
  title: string;
  individual: {
    subtitle: string;
    linkHref: string;
    linkLabel: string;
    depositFee: {
      text: string;
      percent: string[];
      span?: string[];
    };
    swapFee: {
      text: string;
      percent: string[];
    };
    withdrawFee: {
      text: string;
      percent: string[];
    };
    fiatBankIn: {
      text: string;
      percent: string[];
    };
    fiatBankOut: {
      text: string;
      percent: string[];
    };
    depositFeeSpan: {
      text: string;
      percent: string[];
    };
  };
  enterprise: {
    subtitle: string;
    linkHref: string;
    linkLabel: string;
    depositFee: {
      text: string;
      percent: string[];
    };
    swapFee: {
      text: string;
      percent: string[];
      span?: string[];
    };
    withdrawFee: {
      text: string;
      percent: string[];
    };
    fiatBankIn: {
      text: string;
      percent: string[];
    };
    fiatBankOut: {
      text: string;
      percent: string[];
    };
    depositFeeSpan: {
      text: string;
      percent: string[];
    };
  };
  navigation: Navigate;
};

export const getPaymentFeesData = (t: TFunction) => {
  return {
    title: t("pagePaymentFees.title"),
    individual: {
      subtitle: t("pagePaymentFees.subtitleIndividual"),
      linkHref: individualHref,
      linkLabel: t("pagePaymentFees.linkLabel"),
      depositFee: {
        text: t("pagePaymentFees.depositFee"),
        percent: ["0.1%", "0.3%"],
        span: ["<1000$", ">1000$"],
      },
      swapFee: {
        text: t("pagePaymentFees.swapFee"),
        percent: ["0.5%"],
      },
      withdrawFee: {
        text: t("pagePaymentFees.withdrawFee"),
        percent: ["0.5%"],
      },
      fiatBankIn: {
        text: t("pagePaymentFees.fiatBankIn"),
        percent: ["0.5%"],
      },
      fiatBankOut: {
        text: t("pagePaymentFees.fiatBankOut"),
        percent: ["0.5%"],
      },
      depositFeeSpan: {
        text: t("pagePaymentFees.depositFeeSpan"),
        percent: ["0.5%"],
      },
    },
    enterprise: {
      subtitle: t("pagePaymentFees.subtitleEnterprise"),
      linkHref: enterpriseHref,
      linkLabel: t("pagePaymentFees.linkLabel"),
      depositFee: {
        text: t("pagePaymentFees.depositFee"),
        percent: ["0.1%"],
      },
      swapFee: {
        text: t("pagePaymentFees.swapFee"),
        percent: ["0.5%", "0.6%"],
        span: ["<1000$", ">1000$"],
      },
      withdrawFee: {
        text: t("pagePaymentFees.withdrawFee"),
        percent: ["0.5%"],
      },
      fiatBankIn: {
        text: t("pagePaymentFees.fiatBankIn"),
        percent: ["0.5%"],
      },
      fiatBankOut: {
        text: t("pagePaymentFees.fiatBankOut"),
        percent: ["0.5%"],
      },
      depositFeeSpan: {
        text: t("pagePaymentFees.depositFeeSpan"),
        percent: ["0.5%"],
      },
    },
    navigation: {
      button: t("pagePaymentFees.navigation.button"),
      separator: ">",
      location: t("pagePaymentFees.navigation.location"),
    },
  };
};

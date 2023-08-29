import { baseName, ImageType } from "@/assets/constants/main.ts";
import { generateUniqueId } from "@/assets/functions/functions.ts";
import {
  appHref,
  googleHref,
  slide2Href,
  slide4Href,
} from "@/assets/links-href/LinksHref.ts";
import { TFunction } from "i18next";

export const slideOneId = generateUniqueId();
export const slideTwoId = generateUniqueId();
export const slideThreeId = generateUniqueId();
export const slideFourId = generateUniqueId();

export type ProductAndServiceSlideType = {
  id: string;
  subtitle: string;
  textContent: string;
  image: ImageType;
  link?: {
    value: string;
    href: string;
  };
};

export type MobileWalletLinkType = ImageType & {
  id: string;
  href: string;
};

export type MobileWalletType = {
  title: string;
  text: string;
  links: MobileWalletLinkType[];
};

export type CoinType = ImageType & {
  id: string;
};

export type AvailableCurrenciesType = {
  title: string;
  text: string;
  subtitle: string;
  coins: CoinType[];
};

// export type VideoType = {
//   id: string;
//   title: string;
//   content: string;
// };

// export type VideoSliderType = {
//   title: string;
//   text: string;
//   video: VideoType[];
// };

export type ProductAndServiceType = {
  text: string;
  slides: ProductAndServiceSlideType[];
  mobileWallet: MobileWalletType;
  availableCurrencies: AvailableCurrenciesType;
  // videoSlider: VideoSliderType;
};

export const productsAndServiceImages = {
  backgroundL: `${baseName}/images/main-page/products-and-service/description-L.svg`,
  backgroundS: `${baseName}/images/main-page/products-and-service/description-S.svg`,
  oneSlideImage: `${baseName}/images/main-page/products-and-service/slide/slide-one.svg`,
  twoSlideImage: `${baseName}/images/main-page/products-and-service/slide/slide-two.svg`,
  threeSlideImage: `${baseName}/images/main-page/products-and-service/slide/slide-three.svg`,
  fourSlideImage: `${baseName}/images/main-page/products-and-service/slide/slide-four.svg`,
  slideBackgroundL: `${baseName}/images/main-page/products-and-service/slide/background-L.svg`,
  slideBackgroundS: `${baseName}/images/main-page/products-and-service/slide/background-S.svg`,
  mobileWallet: {
    backgroundL: `${baseName}/images/main-page/products-and-service/mobile-wallet/background-L.svg`,
    backgroundS: `${baseName}/images/main-page/products-and-service/mobile-wallet/background-S.svg`,
    appStore: `${baseName}/images/main-page/products-and-service/mobile-wallet/app-store.svg`,
    googlePay: `${baseName}/images/main-page/products-and-service/mobile-wallet/google-play.svg`,
  },
  availableCurrencies: {
    background: `${baseName}/images/main-page/products-and-service/available-currencies/available-currencies.svg`,
    bitcoin: `${baseName}/images/main-page/products-and-service/available-currencies/bitcoin.svg`,
    bitcoinLightning: `${baseName}/images/main-page/products-and-service/available-currencies/bitcoin-lightning.svg`,
    bitcoinLiquid: `${baseName}/images/main-page/products-and-service/available-currencies/bitcoin-liquid.svg`,
    binanceCoin: `${baseName}/images/main-page/products-and-service/available-currencies/binance-coin.svg`,
    tron: `${baseName}/images/main-page/products-and-service/available-currencies/tron.svg`,
    polygon: `${baseName}/images/main-page/products-and-service/available-currencies/polygon.svg`,
    stellar: `${baseName}/images/main-page/products-and-service/available-currencies/stellar.svg`,
    EURMTL: `${baseName}/images/main-page/products-and-service/available-currencies/EURMTL.svg`,
    USDTERC20: `${baseName}/images/main-page/products-and-service/available-currencies/USDT-ERC20.svg`,
    USDTTRC20: `${baseName}/images/main-page/products-and-service/available-currencies/USDT-TRC20.svg`,
    USDTPLG20: `${baseName}/images/main-page/products-and-service/available-currencies/USDT-PLG20.svg`,
    USDTLIQUID: `${baseName}/images/main-page/products-and-service/available-currencies/USDT-LIQUID.svg`,
    BUSDBEP20: `${baseName}/images/main-page/products-and-service/available-currencies/BUSD-BEP20.svg`,
  },
  videoBackground: `${baseName}/images/main-page/products-and-service/video-slider/video.svg`,
};

export const videoLinks = {
  videoOne: "https://www.youtube.com/watch?v=-1DbYJH2h98",
  videoTwo: "https://www.youtube.com/watch?v=-1DbYJH2h98",
  videoThree: "https://www.youtube.com/watch?v=UpEkHC2k_0I",
  videoFour: "https://www.youtube.com/watch?v=-1DbYJH2h98",
  videoFive: "https://www.youtube.com/watch?v=-1DbYJH2h98",
};

// export const mobileWalletImages = {
//   backgroundL: `${baseName}/images/main-page/products-and-service/mobile-wallet/background-L.svg`,
//   backgroundS: `${baseName}/images/main-page/products-and-service/mobile-wallet/background-S.svg`,
//   // appStore: {
//   //   src: `${baseName}/images/main-page/products-and-service/mobile-wallet/app-store.svg`,
//   //   alt: "apple store link",
//   // },
//   // googlePay: {
//   //   src: `${baseName}/images/main-page/products-and-service/mobile-wallet/google-play.svg`,
//   //   alt: "google play link",
//   // },
// };
//
// export const availableCurrenciesImages = {
//   background: `${baseName}/images/main-page/products-and-service/available-currencies/available-currencies.svg`,
// };

// export const productsAndServiceSlideImages = {
//   backgroundL: `${baseName}/images/main-page/products-and-service/slide/background-L.svg`,
//   backgroundS: `${baseName}/images/main-page/products-and-service/slide/background-S.svg`,
// };
//
// export const videoSliderImagesAndVideo = {
//   background: `${baseName}/images/main-page/products-and-service/video-slider/video.svg`,
// };

export const getProductAndServiceData = (t: TFunction) => {
  return {
    text: t("sectionProductAndService.text"),
    slides: [
      {
        id: slideOneId,
        subtitle: t("sectionProductAndService.slideOne.subtitle"),
        textContent: t("sectionProductAndService.slideOne.textContent"),
        image: {
          src: productsAndServiceImages.oneSlideImage,
          alt: t("sectionProductAndService.slideOne.textContent"),
        },
      },
      {
        id: slideTwoId,
        subtitle: t("sectionProductAndService.slideTwo.subtitle"),
        textContent: t("sectionProductAndService.slideTwo.textContent"),
        link: {
          value: "docs.thothpay.com",
          href: slide2Href,
        },
        image: {
          src: productsAndServiceImages.twoSlideImage,
          alt: t("sectionProductAndService.slideTwo.textContent"),
        },
      },
      {
        id: slideThreeId,
        subtitle: t("sectionProductAndService.slideThree.subtitle"),
        textContent: t("sectionProductAndService.slideThree.textContent"),
        image: {
          src: productsAndServiceImages.threeSlideImage,
          alt: t("sectionProductAndService.slideThree.textContent"),
        },
      },
      {
        id: slideFourId,
        subtitle: t("sectionProductAndService.slideFour.subtitle"),
        textContent: t("sectionProductAndService.slideFour.textContent"),
        link: {
          value: t("sectionProductAndService.slideFour.link"),
          href: slide4Href,
        },
        image: {
          src: productsAndServiceImages.fourSlideImage,
          alt: t("sectionProductAndService.slideFour.textContent"),
        },
      },
    ],
    mobileWallet: {
      title: t("sectionProductAndService.mobileWallet.title"),
      text: t("sectionProductAndService.mobileWallet.text"),
      links: [
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.mobileWallet.googlePay,
          alt: t("sectionProductAndService.mobileWallet.googlePlayAlt"),
          href: googleHref,
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.mobileWallet.appStore,
          alt: t("sectionProductAndService.mobileWallet.appleStoreAlt"),
          href: appHref,
        },
      ],
    },
    availableCurrencies: {
      title: t("sectionProductAndService.availableCurrencies.title"),
      text: t("sectionProductAndService.availableCurrencies.text"),
      subtitle: t("sectionProductAndService.availableCurrencies.subtitle"),
      coins: [
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.bitcoin,
          alt: t("sectionProductAndService.availableCurrencies.bitcoinAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.bitcoinLightning,
          alt: t(
            "sectionProductAndService.availableCurrencies.bitcoinLightningAlt"
          ),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.bitcoinLiquid,
          alt: t(
            "sectionProductAndService.availableCurrencies.bitcoinLiquidAlt"
          ),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.binanceCoin,
          alt: t("sectionProductAndService.availableCurrencies.binanceCoinAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.tron,
          alt: t("sectionProductAndService.availableCurrencies.tronAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.polygon,
          alt: t("sectionProductAndService.availableCurrencies.polygonAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.stellar,
          alt: t("sectionProductAndService.availableCurrencies.stellarAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.EURMTL,
          alt: t("sectionProductAndService.availableCurrencies.EurmtlAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTERC20,
          alt: t("sectionProductAndService.availableCurrencies.UsdtErc20Alt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTTRC20,
          alt: t("sectionProductAndService.availableCurrencies.UsdtTrc20Alt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTPLG20,
          alt: t("sectionProductAndService.availableCurrencies.UsdtPlg20Alt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTLIQUID,
          alt: t("sectionProductAndService.availableCurrencies.UsdtLiquidAlt"),
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.BUSDBEP20,
          alt: t("sectionProductAndService.availableCurrencies.BusdBep20Alt"),
        },
      ],
    },
    // videoSlider: {
    //   title: "Video",
    //   text: "Product Description THOTH",
    //   video: [
    //     {
    //       id: generateUniqueId(),
    //       title: "Video title 1",
    //       content: videoLinks.videoOne,
    //     },
    //     {
    //       id: generateUniqueId(),
    //       title: "Video title 2",
    //       content: videoLinks.videoTwo,
    //     },
    //     {
    //       id: generateUniqueId(),
    //       title: "Video title 3",
    //       content: videoLinks.videoThree,
    //     },
    //     {
    //       id: generateUniqueId(),
    //       title: "Video title 4",
    //       content: videoLinks.videoFour,
    //     },
    //     {
    //       id: generateUniqueId(),
    //       title: "Video title 4",
    //       content: videoLinks.videoFive,
    //     },
    //   ],
    // },
  };
};

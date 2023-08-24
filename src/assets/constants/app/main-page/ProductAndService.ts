//import { TFunction } from "i18next";
import { baseName, ImageType } from "@/assets/constants/main.ts";
import { generateUniqueId } from "@/assets/functions/functions.ts";
import {
  appHref,
  googleHref,
  slide2Href,
  slide4Href,
} from "@/assets/links-href/LinksHref.ts";

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

export type VideoType = {
  id: string;
  title: string;
  content: string;
};

export type VideoSliderType = {
  title: string;
  text: string;
  video: VideoType[];
};

export type ProductAndServiceType = {
  text: string;
  slides: ProductAndServiceSlideType[];
  mobileWallet: MobileWalletType;
  availableCurrencies: AvailableCurrenciesType;
  videoSlider: VideoSliderType;
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

export const getProductAndServiceData = () => {
  return {
    text: "Product Description THOTH",
    slides: [
      {
        id: slideOneId,
        subtitle: "Merchants Solution",
        textContent:
          "The solution for businesses to accept crypto payments in any coins and automatically exchange it all into desired stable or currency.",
        image: {
          src: productsAndServiceImages.oneSlideImage,
          alt: "image one",
        },
      },
      {
        id: slideTwoId,
        subtitle: "Enterprise Blockchain Wallets",
        textContent:
          "We deploy infrastructure to provide coins self-custody for enterprise needs.",
        link: {
          value: "docs.thothpay.com",
          href: slide2Href,
        },
        image: {
          src: productsAndServiceImages.twoSlideImage,
          alt: "image two",
        },
      },
      {
        id: slideThreeId,
        subtitle: "Wallet App",
        textContent:
          "Download Android or iOS application to instantly get access to your account.",
        image: {
          src: productsAndServiceImages.threeSlideImage,
          alt: "image three",
        },
      },
      {
        id: slideFourId,
        subtitle: "API",
        textContent:
          "Automate acceptance in your web store, CRM or application with our feature full API.",
        link: {
          value: "Read more",
          href: slide4Href,
        },
        image: {
          src: productsAndServiceImages.fourSlideImage,
          alt: "image four",
        },
      },
    ],
    mobileWallet: {
      title: "Mobile Wallet",
      text: "A solution enabling businesses to accept crypto payments in all major coins and exchange it all into Fiat, Coins or StableCoins.",
      links: [
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.mobileWallet.googlePay,
          alt: "google play link",
          href: googleHref,
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.mobileWallet.appStore,
          alt: "apple store link",
          href: appHref,
        },
      ],
    },
    availableCurrencies: {
      title: "Available Currencies",
      text: "A vast range of major coins, stablecoins and liquid tokens is available.",
      subtitle: "Coins",
      coins: [
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.bitcoin,
          alt: "bitcoin icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.bitcoinLightning,
          alt: "bitcoin lightning icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.bitcoinLiquid,
          alt: "bitcoin liquid icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.binanceCoin,
          alt: "binance coin icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.tron,
          alt: "tron icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.polygon,
          alt: "polygon icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.stellar,
          alt: "stellar icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.EURMTL,
          alt: "EURMTL icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTERC20,
          alt: "USDT ERC20 icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTTRC20,
          alt: "USDT TRC20 icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTPLG20,
          alt: "USDT PLG20 icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.USDTLIQUID,
          alt: "USDT LIQUID icon",
        },
        {
          id: generateUniqueId(),
          src: productsAndServiceImages.availableCurrencies.BUSDBEP20,
          alt: "BUSD BEP20 icon",
        },
      ],
    },
    videoSlider: {
      title: "Video",
      text: "Product Description THOTH",
      video: [
        {
          id: generateUniqueId(),
          title: "Video title 1",
          content: videoLinks.videoOne,
        },
        {
          id: generateUniqueId(),
          title: "Video title 2",
          content: videoLinks.videoTwo,
        },
        {
          id: generateUniqueId(),
          title: "Video title 3",
          content: videoLinks.videoThree,
        },
        {
          id: generateUniqueId(),
          title: "Video title 4",
          content: videoLinks.videoFour,
        },
        {
          id: generateUniqueId(),
          title: "Video title 4",
          content: videoLinks.videoFive,
        },
      ],
    },
  };
};

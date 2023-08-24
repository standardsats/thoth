import { generateUniqueId } from "@/assets/functions/functions.ts";
import { baseName, ImageType } from "@/assets/constants/main.ts";

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
  image: ImageType;
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
  hide: `${baseName}/images/faq-page/hide-icon.svg`,
  show: `${baseName}/images/faq-page/show-icon.svg`,
};

export const faqPageData = () => {
  return {
    title: "FAQ",
    navigation: {
      button: "Accept bitcoin payment",
      separator: ">",
      location: "FAQ",
    },
    search: {
      placeholder: "Search",
      image: {
        src: faqImages.search,
        alt: "search icon",
      },
    },
    hideButton: {
      src: faqImages.hide,
      alt: "hide icon",
    },
    showButton: {
      src: faqImages.show,
      alt: "show icon",
    },
    content: {
      noResult: `
        Sorry, No results found.
      `,
      list: [
        {
          id: generateUniqueId(),
          question: `Can login thoth more 1 people has access per one merchant?`,
          answer: `
        In the same Merchant Panel you can create multiple API keys, which can be used to access to the API by multiple people.
        Also you can share the wallet seed, that will allow several people to login into the same Merchant Panel, but we DON'T recommend this, because anybody who knows seed phrase can access Merchant Panel.
      `,
        },
        {
          id: generateUniqueId(),
          question: `Please have a list with all supporting currencies?`,
          answer: `
        The currencies that are supported to receive:
        
        - BTC (onchain, Lightning Network, Liquid Network)
        - ETH
        - USDT (Erc20, Trc20, Bep20, Plg20, Liquid Network)
        - BUSD (Bep20)
        - Tron
        - Matic
        - BNB
        - Stellar XLM and EURMTL (euro stable in Montenegro)
        
        The fiat currencies that can be used for prices are in the table on merchant manual.
      `,
        },
        {
          id: generateUniqueId(),
          question: `How to start API things?`,
          answer: `
        Go to <a href="https://thothpay.com/merchant">https://thothpay.com/merchant</a> and scan qr code with Blixt Wallet and next use your profile on dashboard to get API token and URL to API docs.
      `,
        },
        {
          id: generateUniqueId(),
          question: `What URL for connect any API?`,
          answer: `
        This is detail for API > <a href="https://thothpay.com/swagger/index.html">https://thothpay.com/swagger/index.html</a>
      `,
        },
        {
          id: generateUniqueId(),
          question: `Thothpay offer withdraw page? or withdraw can be done only from our wallet?
      (client can do autonomously from the wallet or we can only do for the client from our wallet?)`,
          answer: `
        Thothpay provide withdraw for merchant account either by Web UI in thothpay.com/merchant or by API. The merchant should initiate withdraw for client.
      `,
        },
        {
          id: generateUniqueId(),
          question: `Will they also be able to withdrawal from there trading account to their wallet?`,
          answer: `
        Thothpay can withdraw in any crypto currency. That is done via API calls from CRM to Thothpay. But, CRM has to track balances of their users. Thothpay manages aggregated balance of whole merchant account only.
      `,
        },
        {
          id: generateUniqueId(),
          question: `Can you please guide us from swagger for deposit from which API need to start as we have key now we checked api/signin there is k1 which value will come there?`,
          answer: `
        Should use the API key in header to auth the end points from swagger. The k1 is part of auth for merchant panel, not API. Once you get API key in profile page you can auth with it in any API handle.
      `,
        },
        {
          id: generateUniqueId(),
          question: `Can you tell us once in swagger for deposit which APIs we need to follow please suggest once?`,
          answer: `
        To make deposit you should check the POST /api/invoice handle. Use "currency" : { "Fiat": "Usd"} for price in dollars. Also, note that 1 usd is 100 in amount field. The amount in API is always in smallest units of the currency.  
        `,
        },
        {
          id: generateUniqueId(),
          question: `What should be base URL for API we need to use?`,
          answer: `
        <a href="https://thothpay.com/api/invoice">https://thothpay.com/api/invoice</a>
        Swagger prints curl example if you press "Try it out" and then "Execute"
      `,
        },
        {
          id: generateUniqueId(),
          question: `callback url must be in POST method or get method URL`,
          answer: `
        Post
      `,
        },
        {
          id: generateUniqueId(),
          question: `When they created the key. what they have to do next?`,
          answer: `
        They should use the key in request http headers in API. How to use it and example they can find in interactive documentation (swagger) <a href="https://thothpay.com/swagger">https://thothpay.com/swagger</a>
      `,
        },
        {
          id: generateUniqueId(),
          question: `When have a error code on API testing?`,
          answer: `
        Captuer screen shot and give detail that error to support team
      `,
        },
      ],
    },
  };
};

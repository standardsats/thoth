export type NewsSlideType = {
  id: string;
  date: string;
  url: string;
  views: number;
  rating: number;
  span: string;
  title: string;
  text: string;
};

export type newsDataType = NewsSlideType[];

export const newsData: newsDataType = [
  {
    id: "1",
    date: "20.10.2023",
    url: "https://pbs.twimg.com/profile_banners/1686285947070263296/1690877049/1500x500",
    views: 145,
    rating: 5,
    span: "Thothpay news",
    title: "Introducing Thothpay's New Landing Design with Enhanced Features",
    text:
      "We're thrilled to announce the launch of our new and improved landing design at Thothpay. As we continually aim to enhance user experience and offer the best to our community, this revamped design is a testament to our commitment.\n" +
      "\n" +
      "Incorporating user feedback and the latest in web design trends, our new design is not only visually appealing but also user-centric. A key highlight of our platform remains our support for a diverse range of currencies. We proudly support:\n\n- BTC (onchain, Lightning Network, Liquid Network)\n- ETH\n- USDT (Erc20, Trc20, Bep20, Plg20, Liquid Network)\n- BUSD (Bep20)\n- Tron\n- Matic\n- BNB\n- Stellar XLM\n- EURMTL (euro stablecoin in Montenegro)\n" +
      "\n" +
      "We are also excited to tease our upcoming Android and iOS apps, set to launch soon. These apps will bring the power and convenience of Thothpay right to your fingertips, ensuring a seamless crypto experience on the go.\n" +
      "\n" +
      "Moreover, in our constant endeavor to cater to the global audience, we're rolling out fiat withdrawals for Thai local banks. This move is designed to provide our users in Thailand with smoother, faster, and more efficient transactions.\n" +
      "\n" +
      "Stay tuned for more updates, and thank you for being a valued member of the Thothpay community!",
  },
];

//import { TFunction } from "i18next";
import {
  blogHref,
  businessRelationHref,
  eventsHref,
  facebookHref,
  featuredHref,
  howItWorksHref,
  inviteFriendHref,
  partnershipHref,
  podcastHref,
  privacyPolicyHref,
  telegramHref,
  termsConditionHref,
  twitterHref,
} from "@/assets/links-href/LinksHref.ts";

export type FooterLinkType = {
  name: string;
  href: string;
};

export type FooterLinksType = {
  title: string;
  links: FooterLinkType[];
};

export type FooterType = {
  text: string;
  nav: {
    about: FooterLinksType;
    community: FooterLinksType;
    socials: FooterLinksType;
  };
  rights: string;
  policy: FooterLinkType;
  condition: FooterLinkType;
};

export const getFooterData = () => {
  return {
    text: "Our vision is to provide convenience and help increase your sales business.",
    nav: {
      about: {
        title: "About",
        links: [
          { name: "How it works", href: howItWorksHref },
          { name: "Featured", href: featuredHref },
          { name: "Partnership", href: partnershipHref },
          {
            name: "Business Relation",
            href: businessRelationHref,
          },
        ],
      },
      community: {
        title: "Community",
        links: [
          { name: "Events", href: eventsHref },
          { name: "Blog", href: blogHref },
          { name: "Podcast", href: podcastHref },
          { name: "Invite a friend", href: inviteFriendHref },
        ],
      },
      socials: {
        title: "Socials",
        links: [
          { name: "Telegram", href: telegramHref },
          { name: "Twitter", href: twitterHref },
          { name: "Facebook", href: facebookHref },
        ],
      },
    },
    rights: "Auto Fast. All rights reserved",
    policy: {
      name: "Privacy & Policy",
      href: privacyPolicyHref,
    },
    condition: {
      name: "Terms & Condition",
      href: termsConditionHref,
    },
  };
};

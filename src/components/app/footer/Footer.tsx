import styled from "styled-components";
import { Logo } from "@/components/app/common/Logo/Logo.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { FeedbackWidgets } from "@/components/app/common/feedback-widgets/FeedbackWidgets.tsx";
import {
  colorVariables,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";
import {
  blogHref,
  businessRelationHref,
  discordHref,
  eventsHref,
  facebookHref,
  featuredHref,
  howItWorksHref,
  instagramHref,
  inviteFriendHref,
  partnershipHref,
  podcastHref,
  privacyPolicyHref,
  termsConditionHref,
  twitterHref,
} from "@/assets/links-href/LinksHref.ts";
import { footerIcons } from "@/assets/constants/constants.ts";
import { FooterNavigation } from "@/components/app/footer/footer-navigation/FooterNavigation.tsx";

const { whiteColor, deepGrayColor } = colorVariables;

//Data
const FooterData = {
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
        { name: "Discord", href: discordHref },
        { name: "Instagram", href: instagramHref },
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

//Styles
const StyledFooterContainer = styled.footer`
  width: 100vw;
  box-sizing: border-box;
  padding: 5.55vw 4.28vw 0.5vw;
  background-color: ${deepGrayColor};

  @media (max-width: ${sizeVariable}) {
    padding: 15.7vw 0 4.17vw 0;
  }
`;

const StyledWrapperTop = styled.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledWrapperBottom = styled.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledWrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
  }
`;

const StyledLogo = styled(Logo)`
  @media (max-width: ${sizeVariable}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`;

const StyledColumn = styled.div`
  min-width: 10vw;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10vw;
  }
`;

const StyledFooterMainText = styled.p`
  ${resetMarginsAndPaddings};
  margin: 2.54vw 0 2.09vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;
  width: calc(274vw / 14.4);

  @media (max-width: ${sizeVariable}) {
    margin: 5vw 0 5vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    width: calc(355vw / 5.08);
  }
`;

const StyledFeedbackWidgets = styled(FeedbackWidgets)`
  @media (max-width: ${sizeVariable}) {
    padding-left: 3vw;
  }
`;

const StyledFooterText = styled.p`
  ${resetMarginsAndPaddings};
  font-size: calc(16vw / 14.4);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(16vw / 5.08);
  }
`;

const StyledLink = styled(Link)`
  margin-left: 4.2vw;

  @media (max-width: ${sizeVariable}) {
    margin: 0;
  }
`;

//Components
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooterContainer>
      <StyledWrapperTop>
        <StyledColumn>
          <StyledLogo color="transparent" />
          <StyledFooterMainText>{FooterData.text}</StyledFooterMainText>
          <StyledFeedbackWidgets iconsToShow={footerIcons} type={"dark"} />
        </StyledColumn>
        <FooterNavigation data={FooterData.nav.about} />
        <FooterNavigation data={FooterData.nav.community} />
        <FooterNavigation data={FooterData.nav.socials} />
      </StyledWrapperTop>
      <StyledWrapperBottom>
        <StyledFooterMainText>
          &copy; {currentYear} {FooterData.rights}
        </StyledFooterMainText>
        <StyledWrapperLinks>
          <StyledLink
            color={whiteColor}
            href={FooterData.policy.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledFooterText>{FooterData.policy.name}</StyledFooterText>
          </StyledLink>
          <StyledLink
            color={whiteColor}
            href={FooterData.condition.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledFooterText>{FooterData.condition.name}</StyledFooterText>
          </StyledLink>
        </StyledWrapperLinks>
      </StyledWrapperBottom>
    </StyledFooterContainer>
  );
};

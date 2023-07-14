import styled from "styled-components";
import { Logo } from "@/components/common/Logo/Logo.tsx";
import { Link } from "@/components/common/Link/Link.tsx";
import { FeedbackWidgets } from "@/components/common/feedback-widgets/FeedbackWidgets.tsx";
import {
  colorVariables,
  fontFamilySecond,
  resetMarginsAndPaddings,
  sizeVariable,
} from "@/assets/styles/commonStyles.ts";

const { whiteColor, deepGrayColor } = colorVariables;

//Data
const FooterData = {
  text: "Our vision is to provide convenience and help increase your sales business.",
  nav: {
    about: {
      title: "About",
      links: [
        { name: "How it works", href: "https://example.com/how-it-works" },
        { name: "Featured", href: "https://example.com/featured" },
        { name: "Partnership", href: "https://example.com/partnership" },
        {
          name: "Business Relation",
          href: "https://example.com/business-relation",
        },
      ],
    },
    community: {
      title: "Community",
      links: [
        { name: "Events", href: "https://example.com/events" },
        { name: "Blog", href: "https://example.com/blog" },
        { name: "Podcast", href: "https://example.com/podcast" },
        { name: "Invite a friend", href: "https://example.com/invite-friend" },
      ],
    },
    socials: {
      title: "Socials",
      links: [
        { name: "Discord", href: "https://example.com/discord" },
        { name: "Instagram", href: "https://example.com/instagram" },
        { name: "Twitter", href: "https://example.com/twitter" },
        { name: "Facebook", href: "https://example.com/facebook" },
      ],
    },
  },
  rights: "Auto Fast. All rights reserved",
  policy: {
    name: "Privacy & Policy",
    href: "https://example.com/privacy-policy",
  },
  condition: {
    name: "Terms & Condition",
    href: "https://example.com/terms-condition",
  },
};

//Styles
const FooterContainer = styled.footer`
  padding: 5.55vw 10vw 4.17vw 4.17vw;
  background-color: ${deepGrayColor};
  border-radius: 0 0 50px 50px;

  @media (max-width: ${sizeVariable}) {
    border-radius: 0 0 20px 20px;
  }
`;

const WrapperTop = styled.div`
  margin-bottom: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperBottom = styled.div`
  width: 107%;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  justify-content: space-between;

  @media (max-width: ${sizeVariable}) {
    flex-direction: column;
    align-items: center;
  }
`;

const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  @media (max-width: ${sizeVariable}) {
    width: 43.5vw;
    height: 10.24vw;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 5vw;
  }
`;

const Title = styled.h4`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.7vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
    font-weight: bold;
    line-height: 2;
  }
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  ${resetMarginsAndPaddings};
  margin-bottom: 0.34vw;
  color: ${whiteColor};
  ${fontFamilySecond};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.32px;
  text-align: left;

  @media (max-width: ${sizeVariable}) {
    text-align: center;
    font-size: calc(20vw / 5.08);
  }
`;

const FooterText = styled.p`
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
    margin: 8.01vw 0 10.82vw;
    text-align: center;
    font-size: calc(16vw / 5.08);
    width: calc(355vw / 5.08);
  }
`;

const StyledLink = styled(Link)`
  margin-left: 4.2vw;
`;

//Components
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <WrapperTop>
        <Column>
          <StyledLogo color="transparent" />
          <FooterText>{FooterData.text}</FooterText>
          <FeedbackWidgets type={"dark"} />
        </Column>
        <Column>
          <Title>{FooterData.nav.about.title}</Title>
          <LinkList>
            {FooterData.nav.about.links.map((link) => (
              <LinkItem key={link.name}>
                <Link
                  color={whiteColor}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              </LinkItem>
            ))}
          </LinkList>
        </Column>
        <Column>
          <Title>{FooterData.nav.community.title}</Title>
          <LinkList>
            {FooterData.nav.community.links.map((link) => (
              <LinkItem key={link.name}>
                <Link
                  color={whiteColor}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              </LinkItem>
            ))}
          </LinkList>
        </Column>
        <Column>
          <Title>{FooterData.nav.socials.title}</Title>
          <LinkList>
            {FooterData.nav.socials.links.map((link) => (
              <LinkItem key={link.name}>
                <Link
                  color={whiteColor}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              </LinkItem>
            ))}
          </LinkList>
        </Column>
      </WrapperTop>
      <WrapperBottom>
        <FooterText>
          &copy;{currentYear}
          {FooterData.rights}
        </FooterText>
        <WrapperLinks>
          <StyledLink
            color={whiteColor}
            href={FooterData.policy.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FooterData.policy.name}
          </StyledLink>
          <StyledLink
            color={whiteColor}
            href={FooterData.condition.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FooterData.condition.name}
          </StyledLink>
        </WrapperLinks>
      </WrapperBottom>
    </FooterContainer>
  );
}

import styled from "styled-components";
import { Logo } from "../common/Logo/Logo.tsx";
import { Link } from "../common/Link/Link.tsx";
import { FeedbackWidgets } from "../feedback-widgets/FeedbackWidgets.tsx";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;
  text-align: left; /* Выравнивание текста по левому краю */
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left; /* Выравнивание текста по левому краю */
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 5px;
  text-align: left; /* Выравнивание текста по левому краю */
`;

const FooterText = styled.p`
  font-size: 16px;
  text-align: left; /* Выравнивание текста по левому краю */
`;

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
};

export function Footer() {
  return (
    <FooterContainer>
      <Column>
        <Logo />
        <FooterText>{FooterData.text}</FooterText>
        <FeedbackWidgets type={"dark"} />
      </Column>
      <Column>
        <Title>{FooterData.nav.about.title}</Title>
        <LinkList>
          {FooterData.nav.about.links.map((link) => (
            <LinkItem key={link.name}>
              <Link
                color={"pink"}
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
                color={"pink"}
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
                color={"pink"}
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
    </FooterContainer>
  );
}

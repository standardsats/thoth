import styled from "styled-components";
import { FC } from "react";
import {
  ShareData,
  twitterId,
  facebookId,
  emailId,
} from "@/assets/constants/app/news-page/NewsPage.ts";
import { NewsSlideType } from "@/assets/test/newsData.tsx";
import { Link } from "@/components/app/common/Link/Link.tsx";
import { colorVariables, sizeVariable } from "@/assets/styles/commonStyles.ts";
import { SectionTitle } from "@/components/app/common/section-title/SectionTitle.tsx";

const { blackColor } = colorVariables;

//Types
type ShareProps = {
  selectedNews: NewsSlideType;
  share: ShareData;
};

//Styles
const StyledShare = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vw;

  @media (max-width: ${sizeVariable}) {
    width: calc(325vw / 5.09);
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  text-align: left;
  padding: 3.2vw 0 1.2vw 0;
  font-size: calc(20vw / 14.4);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.4px;

  @media (max-width: ${sizeVariable}) {
    font-size: calc(20vw / 5.09);
    padding: 6vw 0 1.2vw 0;
  }
`;

const StyledLinksContainer = styled.div`
  display: flex;
  gap: 0.7vw;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 1.2vw;

  @media (max-width: ${sizeVariable}) {
    margin-right: 3vw;
  }
`;

const StyledImage = styled.img`
  width: 2.22vw;
  height: 2.22vw;

  @media (max-width: ${sizeVariable}) {
    width: 6.61vw;
    height: 6.61vw;
  }
`;

//Component
export const Share: FC<ShareProps> = ({ selectedNews, share }) => {
  const shareSocialInNetwork = (id: string) => {
    const message = encodeURIComponent(
      selectedNews.title + "\n" + selectedNews.text
    );

    const url = encodeURIComponent(window.location.href);

    const subject = encodeURIComponent(selectedNews.title);
    const body = encodeURIComponent(
      selectedNews.title + "\n" + selectedNews.text
    );

    switch (id) {
      case twitterId:
        return `https://twitter.com/intent/tweet?url=${url}&text=${message}`;
      case facebookId:
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case emailId:
        return `mailto:?subject=${subject}&body=${body}`;
      default:
        return "";
    }
  };

  return (
    <StyledShare>
      <StyledSectionTitle color={blackColor}>{share.title}</StyledSectionTitle>
      <StyledLinksContainer>
        {share.links.map((link) => {
          return (
            <StyledLink
              key={link.id}
              color={"transparent"}
              href={shareSocialInNetwork(link.id)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImage src={link.src} alt={link.alt} />
            </StyledLink>
          );
        })}
        <StyledImage src={share.image.src} alt={share.image.alt} />
      </StyledLinksContainer>
    </StyledShare>
  );
};

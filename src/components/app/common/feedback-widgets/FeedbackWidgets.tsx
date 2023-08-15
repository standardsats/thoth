import styled from "styled-components";
import { FC } from "react";
import { Link } from "../Link/Link.tsx";
import { sizeVariable } from "@/assets/styles/commonStyles.ts";
import { feedbackWidgetImages } from "@/assets/constants/constants.ts";
import { CustomButton } from "../customButton/CustomButton.tsx";
import {
  emailHref,
  facebookHref,
  instagramHref,
  telegramHref,
  twitterHref,
} from "@/assets/links-href/LinksHref.ts";

//Types
type Props = {
  type: "light" | "dark";
  $location?: "menu";
  onClick?: () => void;
  iconsToShow: string[];
};

type Image = {
  darkSrc?: string;
  lightSrc?: string;
  alt: string;
};

type Icon = {
  id: string;
  image: Image;
  href: string;
};

//Data
const icons = [
  {
    id: "instagram",
    image: feedbackWidgetImages.instagram,
    href: instagramHref,
  },
  {
    id: "telegram",
    image: feedbackWidgetImages.telegram,
    href: telegramHref,
  },
  {
    id: "twitter",
    image: feedbackWidgetImages.twitter,
    href: twitterHref,
  },
  {
    id: "facebook",
    image: feedbackWidgetImages.facebook,
    href: facebookHref,
  },
  {
    id: "email",
    image: feedbackWidgetImages.email,
    href: emailHref,
  },
];

// Styles
const StyledFeedbackWidgets = styled.div<{
  $location?: "menu";
}>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: ${({ $location }) => ($location ? "relative" : "static")};
  z-index: ${({ $location }) => ($location ? "11" : "1")};

  @media (max-width: ${sizeVariable}) {
    height: ${({ $location }) => ($location ? "100%" : "auto")};
    justify-content: ${({ $location }) => ($location ? "end" : "center")};
    align-items: ${({ $location }) => ($location ? "end" : "center")};
  }
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

const StyledButton = styled(CustomButton)`
  display: flex;
  background-color: transparent;
`;

// Component
export const FeedbackWidgets: FC<Props> = ({
  iconsToShow,
  type,
  $location,
  onClick,
  ...props
}) => {
  return (
    <StyledFeedbackWidgets $location={$location} {...props}>
      {iconsToShow.map((iconId: string) => {
        const icon = icons.find((i) => i.id === iconId) as Icon;
        if (icon) {
          return (
            <StyledLink
              key={icon.id}
              color={"transparent"}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {onClick ? (
                <StyledButton
                  type="button"
                  disabled={!onClick}
                  onClick={onClick}
                >
                  <StyledImage
                    src={
                      icon.image[
                        (type === "light"
                          ? "lightSrc"
                          : "darkSrc") as keyof Image
                      ]
                    }
                    alt={icon.image.alt}
                  />
                </StyledButton>
              ) : (
                <StyledImage
                  src={
                    icon.image[
                      (type === "light" ? "lightSrc" : "darkSrc") as keyof Image
                    ]
                  }
                  alt={icon.image.alt}
                />
              )}
            </StyledLink>
          );
        }
        return null;
      })}
    </StyledFeedbackWidgets>
  );
};
